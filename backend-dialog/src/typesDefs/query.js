const { gql } = require("apollo-server");

const query = gql`
    type Query{
        person(id: ID!): Person
        persons: [Person]
    }
`;

module.exports = query;