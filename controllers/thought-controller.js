const { users, thoughts } = require('../models');

// get all thoughts
const thoughtsController = {
    getAllThoughts(req, res) {
        thoughts.find({})
        .populate({
            path: 'users',
            select: '__v'
        })
        .select('__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(404);
        });
    },
}