const Person = require('../models/Person');

const personResolver = {
    Query:{
        persons(){
            return Person.find();
        },
        person(name){
            return Person.findById(name);
        },
    }
};

module.exports = personResolver;