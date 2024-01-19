
const myProfileInformation = {
	name: 'Pepito', 
	last_name: 'Perez',
	age: 20, 
	favorite_colors: ['blue', 'black', 'white'],
	university: 'Unicauca'
};


console.log(Object.keys(myProfileInformation));
console.log(Object.values(myProfileInformation));
console.log(Object.entries(myProfileInformation));
console.log(myProfileInformation.hasOwnProperty('last_name'));


