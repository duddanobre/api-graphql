const {gql} = require('apollo-server');

const types = gql`
    type Person{
        id: ID!
        picture: String
        age: Int
        eyeColor: String
        nome: String
    }
`;

module.exports = types;