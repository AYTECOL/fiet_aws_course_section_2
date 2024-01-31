// this is a factorial with a for loop
// there is a redundancy here with the 1 
function factorial(number) {
	let total = 1;  
	for (let i = num; i > 1; i--){
		total *= i;
	}
	return total;
}

// the base case 
// factorial of 3 is 3 = 3 times the factorial of 2 
// factorial of 2 is 2 times the factorial of 1 
// factorial of 1 is 1;
function factorialRecursively(number){
	if (number === 1) return 1;
	return number * factorialRecursively(number - 1);
}


// what happens when we do this ?
// infinite, keeps going forever 
// maximum  call stack size exceeded - this is a stack overflow 
function factorialRecursively(number){
	// if (number === 1) return 1;
	return number * factorialRecursively(number - 1);
}