import { V86 } from 'v86';
import wasm_path from 'v86/build/v86.wasm?url';
// import win_img_url from '../assets/images/win31.img?url';

// const win_img_url = `https://raw.githubusercontent.com/Borrus-sudo/website/refs/heads/main/assets/images/win31.img`;
const win_img_url = `https://geographical-coffee-leech.myfilebase.com/ipfs/QmfTcNDCmDbVR5join7RB85xLU98H4hkWXf4Jxe5dmfBSf`;
const bios_url = `https://raw.githubusercontent.com/copy/v86/refs/heads/master/bios/bochs-bios.bin`;
const vga_bios_url = `https://raw.githubusercontent.com/copy/v86/refs/heads/master/bios/bochs-vgabios.bin`;

async function download_buffer(url) {
    const blob = await fetch(url).then((res) => res.blob());
    const buffer = await blob.arrayBuffer();
    return buffer;
}

async function download_img(url) {
    const blob = await fetch(url).then((res) => res.blob());
    let ds = new DecompressionStream('gzip');
    let decompressedStream = blob.stream().pipeThrough(ds);
    return await new Response(decompressedStream).arrayBuffer();
}

async function app() {
    const screen_container = document.getElementById('screen_container');

    const startButton = document.createElement('button');
    startButton.textContent = 'Loading files baby...';
    startButton.disabled = true;
    screen_container.before(startButton);

    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download State';
    downloadButton.style.marginLeft = '8px';
    downloadButton.disabled = true;
    startButton.after(downloadButton);

    const [win_img, bios, vga_bios] = await Promise.all([
        download_img(win_img_url),
        download_buffer(bios_url),
        download_buffer(vga_bios_url),
    ]);

    const emulator = new V86({
        wasm_path,
        screen: {
            container: screen_container,
        },
        log_level: 0x2000000,
        uart1: true,
        memory_size: 32 * 1024 * 1024,
        vga_memory_size: 2 * 1024 * 1024,
        bios: {
            buffer: bios,
        },
        vga_bios: {
            buffer: vga_bios,
        },
        hda: {
            buffer: win_img,
        },
        modem: {
            uart: 1,
            phonebook: {
                '10.0.0.44.23456': 'ws://localhost:23456/',
                // '911': 'ws://localhost:23456/',
            },
        },
        autostart: false,
    });
    startButton.textContent = 'Start';
    startButton.disabled = false;
    downloadButton.disabled = false;

    const canvas = document.querySelector('canvas');

    canvas.addEventListener('mousedown', () => {
        if (document.pointerLockElement !== canvas) {
            canvas.requestPointerLock();
        }
    });

    document.addEventListener('pointerlockchange', () =>
        emulator.mouse_set_enabled(document.pointerLockElement === canvas),
    );

    startButton.addEventListener('click', async () => {
        try {
            startButton.disabled = true;
            await emulator.run();
            emulator.mouse_set_enabled(false);
        } catch (_) {
            location.reload();
        }
    });

    downloadButton.addEventListener('click', () => {
        downloadButton.disabled = true;
        downloadButton.textContent = 'Preparing download...';

        if (!emulator.is_running) {
            alert('Start the emulator first');
            return;
        }

        const hda = emulator.v86.cpu.devices.ide.primary.master.buffer;
        const blob = new Blob([hda.buffer], {
            type: 'application/octet-stream',
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'win31-updated.img';
        document.body.append(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);

        downloadButton.disabled = false;
        downloadButton.textContent = 'Download State';
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await app();
    } catch (e) {
        location.reload();
    }
});
