const { gql } = require("apollo-server");

const query = gql`
    type Query{
        person(name: String!): Person
        persons: [Person]
    }
`;

module.exports = query;