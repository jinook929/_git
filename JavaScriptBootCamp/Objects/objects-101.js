let person = {
	name: 'Jinook',
	age: 44,
	location: 'NYC'
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age = ++person.age;

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
