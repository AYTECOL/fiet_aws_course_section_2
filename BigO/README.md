# TIMING CODE

We would like to check different functions to solve a problem: 

	1. timing.js - By using a for loop
	2. timing_b.js By applying a mathematical formula 

What does better mean ? 

	1. Faster?
	2. Less memory intensive?
	3. More readable?  (sometimes this is less important)


The problem with time: is that measurement can be different 

	1. Different machines will record different times 
	2. The same machine will record different times 

So, we count operations 

	1. Count the number of simple operations the computer has to perform, they will be always the same 
	2. Count the number of operations is hard, but we can take a look to the trend 

What is the BigO for each example? 

	1. timing: O(n) - the number of operations is (eventually) bounded by a multiple of n
	2. timing_b: O(1) - is always three operations 
	3. timing_c: O(n) - We could think is O(2n), We only care about n
	4. timing_d: O(n^2) - O(n) operation inside an O(n) operation 
	5. log_at_least_five - O(n)
	6. log_at_most_five - O(1)