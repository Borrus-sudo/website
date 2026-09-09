- There are 4 steps to write parallel algorithms
	- Identify the portions of your code that are [[Concurrency vs Parallelism#^856f78|concurrent]]. 
	- Decompose and Map the concurrent pieces of your work onto multiple processes running in parallel
	- Distribute the input, output and intermediate data associated with the program
	- Managing access to data shared by multiple processors
	- Synchronizing the processors at various stages of the parallel program execution
- Upon identifying the portions of code that are concurrent, we use the knowledge to come up with an effective decomposition strategy to the main computation.
- Tasks are programmer defined units of execution into which the main computation is subdivided by means of decomposition.
- #### Task Dependency Graph
	- The tasks may have inter-dependence and relative order of execution which is expressed via the task-dependency graph.
	- $$
\begin{gathered}
G=(V,E) \\
V=\{T_1,T_2,\ldots,T_n\}
\quad\text{represents the set of times taken by the tasks} \\[6pt]
(T_i,T_j)\in E
\quad\Longleftrightarrow\quad
T_i\text{ must complete before }T_j\text{ can execute} \\[6pt]
G\text{ is a directed acyclic graph (DAG)}
\end{gathered}
$$ 
- #### Properties 
	- **Granularity** : The number and size of tasks into which a problem is decomposed. 
		 - **Fine grained**: Large and Small
		 - **Coarse grained**: Small and Large
	- **Shape**: The decomposition strategy decides the shape of the task dependency graph.  
	- **Degree of Concurrency**: The measure of the amount of tasks that can be executed simultaneously. **Average** is the more useful indicator of the two.
		- **Maximum Degree of Concurrency**: Maximum number of tasks that can be executed parallely in the program at any given point in time
		- **Average Degree of Concurrency**: The average number of tasks that can be executed parallely during the course of the program execution.
			- $$\boxed{ C_{\text{avg}} = \frac{\displaystyle\sum_{v \in V} w(v)} {\displaystyle\sum_{v \in P_{\text{critical}}} w(v)} }$$
			- The longest directed path between any pair of start and finish nodes is known as the critical path. The sum of the weights of nodes along this path is known as the critical path length.
	- Degree of Concurrency depends on both shape and granularity. 
		- **Lower granularity** results in higher Degree of Concurrency
		- For the **same granularity**, degree of concurrency might be different due the difference in the **shape**

- Decomposition techniques: 
	- Recursive Decomposition


- Complexity of Parallel algorithm
	- **Overhead function:  $To = p*Tp - Ts$ 
		- It is the excess time that a parallel algorithm spends. (P.S think about the structure of the formula a bit)
			- Due to idling
			- Due to inter-process communication
			- Due the nature of the algorithm so that it can be exploited by some decomposition technique
	- **Speedup** **S**: $\frac{Ts}{Tp}$  It is theoretically upper bounded by $p$  (the number of processing elements) (Proof by contradiction is trivial). A super-linear speedup is rare, but occurs if the parallel formulation just does lesser work compared to the serial version or due to hardware affordances. **A speed-up of p means zero overhead time period.** 
		- $Tp$ , parallel runtime, is the time elapsed when the parallel computation starts and the last processing element finishes when executed on $p$ identical processing elements.
		- $Ts$ is the time elapsed when the serial algorithm starts and finishes. The **best serial algorithm** is chosen. We might at times preferred benchmarked times (from real world usage) rather than asymptotic complexity because they can be gamed with extremely big constants. 
		- $p$ the number of processing elements
	- Efficiency:  $$Efficiency = \frac{S}{p}$$
	- Cost: $$Cost = p * Tp$$
	- A parallel system is cost optimal if the asymptotic growth of $Cost$ and **_Fastest Serial Algorithm_** is the same or **Efficiency** is 1.
	- Granularity has no effect on cost optimality! You can **probably** make things faster, but not more cost optimal!