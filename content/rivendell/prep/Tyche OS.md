# TycheOS - Technical Interview Cheat Sheet & Architecture Guide

## 1. High-Level Summary (Elevator Pitch)
**TycheOS** is a lightweight, bare-metal operating system kernel built from scratch in **C and ARM64 (AArch64) Assembly** for the **Raspberry Pi 3B** (executed via QEMU).

Key Features:
- **Architecture**: ARMv8-A (AArch64 execution mode).
- **Scheduler**: **Lottery Scheduling Algorithm** (probabilistic tickets & Xorshift PRNG).
- **Process Management**: Kernel threads & user process creation via `copy_process` and stack state initialization.
- **Memory Management**: Page allocation tracking (`get_free_page`) & kernel heap bump allocator (`kmalloc`).
- **Filesystem**: Virtual File System (VFS) abstractions backed by an in-memory RAM filesystem (`tmpfs`).
- **Interactive Shell**: Custom CLI supporting directory navigation (`cd`, `pwd`, `ls`) and file operations (`mkdir`, `touch`, `cat`).

---

## 2. Deep-Dive: Core Subsystems & Code Snippets

### A. Boot & Exception Level Transition (`src/boot.S`)
**How it works**:
1. Hardware starts all 4 CPU cores at **EL3** (Exception Level 3).
2. Primary core (Core 0) is selected using `mpidr_el1`; secondary cores are parked in a `hang` loop.
3. Transitions from **EL3 down to EL1** (Kernel mode) using `eret` after configuring system registers (`SCTLR_EL1`, `HCR_EL2`, `SCR_EL3`, `SPSR_EL3`).
4. Zeroes out the BSS section and initializes the initial stack pointer (`mov sp, #LOW_MEMORY`).

```assembly
// From src/boot.S
.globl _start
_start:
    mrs x0, mpidr_el1
    and x0, x0, #0xFF
    cbz x0, master      // Core 0 goes to master
    b hang              // Park cores 1-3

master:
    // Configure Exception Level registers & set target PC in elr_el3
    adr x0, el1_entry
    msr elr_el3, x0
    eret                // Return to EL1 execution mode

el1_entry:
    adr x0, __bss_start
    adr x1, __bss_end
    sub x1, x1, x0
    bl memzero          // Clear uninitialized globals (.bss)
    mov sp, #LOW_MEMORY
    bl main             // Jump to C entry point
```

---

### B. Scheduling: Why is it called "TycheOS"? (`src/scheduler.c`)
**How it works**:
- **Tyche** is the Greek goddess of chance/luck.
- The kernel implements **Lottery Scheduling**—a probabilistic scheduling algorithm.
- Each process gets assigned a number of "tickets" based on its priority and remaining tick counter.
- An **Xorshift Pseudo-Random Number Generator** selects a winning ticket at each context switch interval.
- **Benefit**: Ensures fair resource allocation proportional to process priority without hard starvation.

```c
// From src/scheduler.c
void _schedule(void) {
    preempt_disable();
    unsigned long total_tickets = 0UL;

    // 1. Calculate total ticket count across all RUNNING tasks
    for (int i = 0; i < NR_TASKS; ++i) {
        struct task_struct* p = tasks[i];
        if (!p || p->state != TASK_RUNNING) continue;

        unsigned long tickets = (unsigned long)(p->priority + (p->counter & 0xff));
        if (tickets == 0) tickets = 1UL;
        total_tickets += tickets;
    }

    // 2. Pick random winning ticket
    uint64_t r = rng_next(); // Xorshift PRNG
    unsigned long win = (unsigned long)(r % total_tickets);

    // 3. Select winning task by accumulating tickets
    unsigned long acc = 0UL;
    for (int i = 0; i < NR_TASKS; ++i) {
        struct task_struct* p = tasks[i];
        if (!p || p->state != TASK_RUNNING) continue;
        acc += (p->priority + (p->counter & 0xff));
        if (win < acc) { winner = p; break; }
    }

    switch_to(winner);
    preempt_enable();
}
```

---

### C. Low-Level Context Switching (`src/scheduler.S`)
**How it works**:
- Saves ARM64 callee-saved registers (`x19-x28`), frame pointer (`x29`), stack pointer (`sp`), and return address (`x30`/`lr`) into the current task's `cpu_ctx` struct.
- Restores the saved registers from the target process's `cpu_ctx` struct and updates `sp`.

```assembly
// From src/scheduler.S
.globl cpu_switch_to
cpu_switch_to:
    add x8, x0, #0              // x0 = prev task struct pointer
    mov x9, sp

    // Save current thread state
    stp x19, x20, [x8], #16     // Save registers x19-x28
    stp x21, x22, [x8], #16
    stp x23, x24, [x8], #16
    stp x25, x26, [x8], #16
    stp x27, x28, [x8], #16
    stp x29, x9,  [x8], #16     // Save FP (x29) & SP (x9)
    str x30,      [x8]          // Save LR (x30)

    // Restore next thread state
    add x8, x1, #0              // x1 = next task struct pointer
    ldp x19, x20, [x8], #16
    ldp x21, x22, [x8], #16
    ldp x23, x24, [x8], #16
    ldp x25, x26, [x8], #16
    ldp x27, x28, [x8], #16
    ldp x29, x9,  [x8], #16
    ldr x30,      [x8]
    mov sp, x9
    ret                         // Jump to restored LR
```

---

### D. Process Creation & Cloning (`src/fork.c`)
**How it works**:
- `copy_process` allocates a 4KB physical page for the new process struct and stack.
- For kernel threads (`PF_KTHREAD`), it sets registers `x19` (function entry) and `x20` (argument).
- Sets `cpu_ctx.lr` to `ret_from_fork` so when the scheduler switches to this task for the first time, it jumps directly to execution.

```c
// From src/fork.c
int copy_process(unsigned long clone_flags, unsigned long fn, unsigned long arg, unsigned long stack) {
    preempt_disable();
    struct task_struct *p = (struct task_struct *)get_free_page();
    if (!p) return -1;

    struct pt_regs *childregs = task_pt_regs(p);
    memzero((unsigned long)childregs, sizeof(struct pt_regs));

    if (clone_flags & PF_KTHREAD) {
        p->cpu_ctx.x19 = fn;
        p->cpu_ctx.x20 = arg;
    }

    p->state = TASK_RUNNING;
    p->priority = current->priority;
    p->cpu_ctx.lr = (unsigned long)ret_from_fork; // Target jump on first context switch
    p->cpu_ctx.sp = (unsigned long)childregs;

    int pid = curr_task++;
    tasks[pid] = p;
    preempt_enable();
    return pid;
}
```

---

### E. Memory Management (`src/mm.c`)
**How it works**:
1. **Page Allocator**: Uses a bitmap array `mem_map` representing 4KB physical memory pages beyond `LOW_MEMORY`.
2. **Kernel Heap Allocator**: Implements `kmalloc` as an 8-byte aligned bump allocator on a 64KB statically reserved buffer (`kernel_heap`).

```c
// From src/mm.c
unsigned long get_free_page() {
    for (int i = 0; i < PAGING_PAGES; i++) {
        if (mem_map[i] == 0) {
            mem_map[i] = 1;
            return LOW_MEMORY + i * PAGE_SIZE; // 4KB page start address
        }
    }
    return 0;
}

void* kmalloc(size_t size) {
    size = (size + 7) & ~7; // 8-byte alignment
    if (heap_ptr + size > kernel_heap + KERNEL_HEAP_SIZE) return NULL;
    void* ptr = heap_ptr;
    heap_ptr += size;
    return ptr;
}
```

---

### F. VFS & TmpFS Filesystem (`src/fs.c` & `src/tmpfs.c`)
**How it works**:
- **Virtual File System (VFS)** decouples OS path resolution from filesystem drivers.
- **TmpFS** is an in-memory filesystem storing a tree of `tmpfs_node` structures (directories contain an array of child `tmpfs_node*` pointers; files contain memory buffers for content).

```c
// In-Memory Node Definition (include/tmpfs.h & src/tmpfs.c)
struct tmpfs_node {
    struct vnode vnode;
    enum tmpfs_type type; // TMPFS_FILE or TMPFS_DIR
    struct tmpfs_node* children[MAX_CHILDREN];
    int num_children;
    char* content;
    unsigned int content_size;
};
```

---

### G. Kernel System Call Mechanism (`src/sys.c` & `src/entry.S`)
**How it works**:
- System calls are dispatched via an indexed system call vector table `sys_call_table`.
- User mode issues an `svc #0` ARM assembly instruction, triggering a synchronous exception routed into `el0_svc` in `entry.S`.

```c
// From src/sys.c
void* const sys_call_table[] = {
    [0] = sys_write,
    [1] = sys_malloc,
    [2] = sys_clone,
    [3] = sys_exit
};
```

---

## 3. Potential Interview Questions & Short Answers

1. **Q: Why is your kernel named TycheOS?**
   * **A**: *Tyche* is the Greek goddess of chance/luck. It is named after its core CPU scheduling mechanism—**Lottery Scheduling**, which probabilistically selects the next running thread using pseudo-random ticket selection based on task priorities.

2. **Q: How does context switching work on ARM64 in your kernel?**
   * **A**: In `cpu_switch_to`, we manually save callee-saved registers (`x19-x28`), the frame pointer (`x29`), link register (`x30`), and stack pointer (`sp`) of the current task struct. Then we restore those exact registers from the next task struct and execute `ret` to return into the next task's execution path.

3. **Q: How do you boot up and drop exception levels on ARMv8-A?**
   * **A**: QEMU starts execution at EL3. We check `mpidr_el1` to ensure only Core 0 runs while parking cores 1-3. Then we configure `spsr_el3` and set `elr_el3` (Exception Link Register) to our `el1_entry` label before calling `eret` (Exception Return), which drops CPU privileges down to EL1 (Kernel Mode).

4. **Q: How does the virtual filesystem (VFS) work in TycheOS?**
   * **A**: VFS abstracts file operations (`lookup`, `create`, `read`, `write`) using `vnode` abstractions. `vfs_lookup()` iteratively parses path strings component by component (delimited by `/`) to resolve target nodes in our in-memory `tmpfs` directory tree.
