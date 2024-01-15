// operations 
// * - multiplication operation
// + addition operation 
// / division operation 
// three operations 


function addUpTo(n) {
    return n * (n + 1) / 2;
}

const t1 = performance.now();
console.log(addUpTo(6))
const t2 = performance.now();
const timeElapsed = (t2 - t1) / 1000; 
console.info(`Time elapsed: ${timeElapsed} seconds`);