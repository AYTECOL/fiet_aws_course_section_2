// what really matters is n 
// is gonna grow as n grows 
function logAtLeastFive(n) {
	for (let i = 0; i <= Math.max(5, n) ; i++){
		console.info(i);
	}
};

// logAtLeastFive(3);
logAtLeastFive(100);