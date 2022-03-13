const Person = require('../models/Person');

const personResolver = {
    Query:{
        persons(){
            return Person.find();
        },
        person(_, { id }){
            return Person.findById(id);
        },
    }
};

module.exports = personResolver;