Popular interview questions.

## DBMS
- DBMS syntax order execution
	- FROM
	- JOIN
	- WHERE
	- GROUP BY 
	- HAVING
	- SELECT
	- DISTINCT
	- ORDER BY
	- LIMIT
- DBMS JOINS and Subqueries
	- JOINS:
		- INNER JOIN or simply JOIN
		- LEFT JOIN
		- RIGHT JOIN
		- [FULL] OUTER JOIN == UNION of the LEFT and RIGHT JOIN
		- CROSS JOIN
		- THERE IS NOT FULLER INNER JOIN! Trick qn!!!
- DBMS  case syntax
	- ```sql
	  CASE
	   WHEN t1.value = '10' THEN 1
	   ELSE 0 
	  END as "Something blah blah"
	  ```
- DBMS window functions or aggregate functions
	- Window functions:
		- FUNC(col) OVER (PARTITION BY col_name ORDER BY col_name DESC)
			- RANK() OVER (P)
			- DENSE_RANK() OVER
	- Aggregate Functions:
		- COUNT(\*) or COUNT(1) includes nulls
		- COUNT(col_name) does not include nulls
		- COUNT(DISTINCT col_name) unique non-null values
		- SUM, MAX, MIN, AVG, COUNT are all non-null columns
- DBMS Views
- DBMS handling date and time
	- CURDATE() Date
	- CURTIME() Time
	- NOW() Date + Time Timestamp
	- You can use standard >= and <= operators for doing range matching
	- INTERVAL is good arithmetic for Date and Time. 
	- MySQL does temporal matching well!
- DBMS Triggers
- DBMS Updates, Create TABLE 
- DBMS transactions 
- DBMS indexes
- DBMS Normalizations

## DSA popular patterns:
- Sliding Window
- String Problems
- Stack and Queue
- Binary Search
- Linked Lists
	- Reverse a LL
- Trees: DFS, BFS, Level Order, Pre, Post.
- Reverse Array
- Math puzzles?
	- Esp tiger, human, goat and grass.

## Projects: 
- React.js, Auth: (better-auth), JWT.
- Auth with
- Code snippets from Projects.
	- Practice some C, C++, Assembly

## CN:
- OAuth
- JWT 
- 3 way hand-shake
- Stateless auth vs Stateful Auth
- HTTP verbs. Especially put vs post. 
- REST APIs.
- Why is HTTP stateless
- OSI Layers
- TCP and UDP especially from my project perspective.
	- TCP 3 way handshake
	- TCP 4 way hand-shake break down
	

## OOPS
- SOLID Principles
- The 4 OOPS pillars
- Design Patterns
- CI vs CD, Agile, Scrum Model etc.
- Maybe some RAG stuff.

## OS
- Scheduling Algorithms
- Memory Stuff: 
	- Virtual memory
	- Paging, Segmentation
	- Internal vs External Fragmentation
	- Stack, Heap. 
	- malloc implementation.
	- Data Alignment