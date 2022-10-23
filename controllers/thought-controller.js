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

    // get one thoughts by id
    getThoughtById({ params }, res) {
        thoughts.findOne({ _id: params.id })
        .populate({
            path: 'users',
            select: '__v'
        })
        .select('__v')
        .then(dbThoughtData => {
            if (dbThoughtData) {
                res.status(400).json({ message: 'No thoughts with this id' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
}