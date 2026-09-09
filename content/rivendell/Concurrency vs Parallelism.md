### Definitions:
- Concurrency definitions: ^d7a223
	- Concurrency is the property of the system which enables units of the program, algorithm or problem to be executed out-of-order or in partial order without affecting final outcome.  ^856f78
		- These units of program tend to be independent.
		- Out-of-order execution in hardware draws upon similar properties?
		- In ACID principles, Isolation represents the property of the database where the simultaneously executing database transactions don't see each others progress.
			- Isolation depends on the concurrency of the database transactions!
			- If there exists an interleaving of database transactions that doesn't give the same result as the serial execution of transactions, we say the transactions are not "serializable" i.e the "concurrency" of the system is absent.
		- The concurrency of a system also allows one to write more [[Parallel Programming|parallelizable]] programs.
	- Concurrency (especially in OS contexts) also means the overlap of the compute and IO cycles. (Also the more popular definition) 
		- The OS scheduler schedules another process to run on the CPU if the current running process waits upon an IO response to decrease CPU idle time and improve efficiency.
		- In some situations, it also refers to the interleaving of processes but not strictly limited to the case of overlapping CPU and IO cycles. The OS scheduler employs various strategies and heuristics to decide when to swap out an existing process from the CPU irrespective of whether the current process is waiting upon an IO request or not. This is done to give users the illusion that both the tasks are being done simultaneously.
- Parallelism: 
	- Parallelism is a type of computation in which many computation or the execution of processes are carried out simultaneously.
	- It generally exploits the concurrency of a system to achieve parallelism. 
### Source of Confusion
The word "concurrency" often get's thrown around when the word "parallel" makes more  sense. I speculate this is primarily due to [[Concurrency vs Parallelism#^856f78|this]] definition of concurrency
