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
                res.status(400).json({ message: 'No thoughts with this ID' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    createThought({ params }, res) {
        thoughts.create(body)
        .then(dbThoughtData => {
            users.findOneAndUpdate({ _id: params.userId }, { $push: { thought: dbThoughtData._id }}, { new: true })
            .then(dbUserData => {
                if (dbUserData) {
                    res.status(400).json({ message: 'No user with this ID' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
        })
    },

    // update thought by id
    updateThought({ params, body }, res) {
        thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbThoughtData => {
            if (dbThoughtData) {
                res.status(404).json({ message: 'No thought with this ID' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    
}