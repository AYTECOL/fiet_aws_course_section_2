// +=  - n (because of the foor loop) addition and assignments operations 
// i++ - n additions and assignments operations 
// total = 0 - single assignment 
// <=  - n comparisons 
// i = 1 - single assignment 
// from 2n to 5n + 2 

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total; 
};

const t1 = performance.now();
console.log(addUpTo(6))
const t2 = performance.now();
const timeElapsed = (t2 - t1) / 1000; 
console.info(`Time elapsed: ${timeElapsed} seconds`);