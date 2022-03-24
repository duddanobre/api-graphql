const { gql } = require("apollo-server");

const query = gql`
    type Query{
        person(id: ID!): Person
        persons: [Person]
    },

	type Mutation{
		createPerson(id: ID!, picture: String!, age: Int!, eyeColor: String!, nome: String!): Person
		delete(id: ID!): Boolean
		updatePerson(id: ID!, picture: String, age: Int, eyeColor: String, nome: String): Person
	}
`;

module.exports = query;