// helper method recursion 
// we have a main function and other function inside the scope 
// we are not going to reset the value 
function collectOddValues(inputData) {
	let result = []

	function helperRecursion(helperInput){
		if (helperInput.length === 0){
			return;
		}
		if (helperInput[0] % 2 !== 0){
			result.push(helperInput[0])
		}
		// slice returns a copy of the original array
		helper(helperInput.slice(1));
	}

	helperRecursion(inputData);
}

collectOddValues([1,2,3,4,5,6,7,8,9])