// check with a code snippet 
// add the marker in your 

function takeShower () {
	console.log('shower.....');
}

function eatBreakfast () {
	let meal = cookFood();
	return `Eating: ${meal}`
}

function cookFood () {
	const options = ['Eggs', 'Oatmeal', 'Protein Shake']
	return options[Math.floor(Math.random() * options.length)];
}

function WakeUp () {
	takeShower();
	eatBreakfast();
	console.log('I am ready to study');
}

WakeUp(); // snipped goes here