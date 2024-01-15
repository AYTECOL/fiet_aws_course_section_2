function countDownAndUp (n) {
	console.info("Going down")
	for (let j = n - 1; j >= 0; j--) {
		console.log(j)
	};
	console.info("Going Up");
	for (let i = 0; i < n; i++) {
		console.log(i)
	};
	console.info("Bye");
}

countDownAndUp(10)