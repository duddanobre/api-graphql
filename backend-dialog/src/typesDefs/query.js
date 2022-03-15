const { gql } = require("apollo-server");

const query = gql`
    type Query{
        person(id: String): Person
        persons: [Person]
    }
`;

module.exports = query;