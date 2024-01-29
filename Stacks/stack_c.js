class Node {
	constructor(value) {
		this.value = value; 
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null; 
		this.size = null; 
	}

	push (value) {
		let newNode = new Node(value);
		if (!this.first){
			this.first = newNode;
			this.last = newNode; 
		} else {
			let temp = this.first;
			this.first = newNode; 
			this.first.next = temp; 
		}
		return ++this.size; 
	}

	pop () {
		if (!this.first) return null;
		var temp = this.first;
		if (this.first == this.last) {
			this.last = null;
		}
		this.first = this.first.next
		this.size--;
		return temp;
	}

}