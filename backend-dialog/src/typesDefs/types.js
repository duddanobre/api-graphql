const {gql} = require('apollo-server');

const types = gql`
    type Person{
        _id: String
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
        _id: String
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