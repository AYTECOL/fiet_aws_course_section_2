// the problem is when you remove from the beginning 
let queue = [];
 
queue.push("FIRST");
queue.push("SECOND");
queue.push("THIRD");

queue;

queue.shift();
queue.shift();
queue.shift();


queue = [];

queue.unshift("FIRST");
queue.unshift("SECOND");
queue.unshift("THIRD");

queue.pop();
queue.pop();
queue.pop();