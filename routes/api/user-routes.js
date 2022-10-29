const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// Set up get all and post for users
router.route('/').get(getAllUsers).post(createUser);
// Set up get by id, put and delete for users
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;