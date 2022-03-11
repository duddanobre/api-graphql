const {gql} = require('apollo-server');

const types = gql`
    type Person{
        id: ID!
        index: Int
        picture: String
        age: Int
        eyeColor: String
        name: String
        company: String
        email: String
        phone: String
        friends: Friends
        greeting: String
    }

    type Friends{
        id: ID!
        index: Int
        picture: String
        age: Int
        eyeColor: String
        name: String
        company: String
        email: String
        phone: String
    }
`;

module.exports = types;