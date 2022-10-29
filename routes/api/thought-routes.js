const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controller');

// Set up get all and post for thoughts
router.route('/').get(getAllThoughts).post(createThought);
// Set up get by id, put and delete for thoughts
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

module.exports = router;