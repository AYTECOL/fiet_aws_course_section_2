// this is a nested loop
function printPairs (n) {
	for (let i = 0; i < n; i++){ // O(n)
		for (let j = 0; j < n; j++){ // O(n)
			console.log(i,j);
		}
	}

};

printPairs(10);