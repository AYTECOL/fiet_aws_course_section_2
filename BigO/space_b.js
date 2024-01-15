// newArr grows in proportion to arr 
// space complexity is O(n)
function double (arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(2 * arr[i]);
	}
	console.log(newArr);
}

double([5])