const Person = require('../models/Person');

const persons = [
	{id:"1", picture: "src/images/aaa.jpg", age: 23, eyeColor: "Brown", nome: "Maria" }
]

const personResolver = {
    Query:{
        persons: () => {
            return persons;
        },
        person : (_, { id }) => {
            return persons.find(person => person.id === id);
        },
    },
	Mutation: {
		createPerson: (_, { id, picture, age, eyeColor, nome }) => {
			const person = { id, picture, age, eyeColor, nome };
			persons.push(person);
			return person;
		},
		delete: (_, { id }) => {
			const filter = persons.filter(person => person.id !== id);
			persons = filter;
			return true;
		},
		updatePerson: (_, { id, picture, age, eyeColor, nome }) => {
			const person = persons.find((person) => person.id === id);
			person.id = person.id;
			person.picture = picture ? picture : person.picture;
			person.age = age ? age : person.age;
			person.eyeColor = eyeColor ? eyeColor : person.eyeColor;
			person.nome = nome ? nome : picture.nome;
			return person;
		}
	}
};

module.exports = personResolver;