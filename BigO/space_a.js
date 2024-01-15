// total = 0 - one number, we are adding but not creating a new variable O(1)
// i = 0 - one number 
// constant space 
function sumValues (arr) {
	let total = 0;
	for (let i = 0; i <= arr.length; i++){
		total += arr[i];
	}
	return total;
}