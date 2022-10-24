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

    createUser({ body },res) {
        users.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    // update user by id
    updateUser({ params, body }, res) {
        users.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this ID' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
}