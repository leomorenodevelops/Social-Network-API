const { users } = require('../models');

// get all users
const usersController = {
    getAllUsers(req, res) {
        users.find({})
        .populate({
            path: 'thoughts',
            select: '__v'
        })
        .select('__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    // get user by id
    getUserById({ params }, res) {
        users.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '__v'
        })
        .select('__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
}