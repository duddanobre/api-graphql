const Person = require('../models/Person');

const personResolver = {
    Query:{
        persons(parent, args, context, info){
            return Person.find()
                    .then((result) => {
                        return result.map(r => ({...r._doc}));
                    }).catch((err) => {
                        console.error(err);
                    });
        },
        person(parent, args, context, info){
            return Person.findOne({_id: args.id})
                    .then((data) => {
                        return {...data._doc}
                    }).catch((err) => {
                        console.error(err);
                    });
        },
    }
};

module.exports = personResolver;