// what really matters is 5
// after 5 the n is not capable of grow 
function logAtMostFive(n) {
	for (let i = 0; i <= Math.min(5, n) ; i++){
		console.info(i);
	}
};


//logAtMostFive(3);
logAtMostFive(100);