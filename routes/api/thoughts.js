const express = require('express');
const router = express.Router();
const thoughtsController = require('../../controllers/thoughtsController');

// Thought Routes
router.get('/', thoughtsController.getAllThoughts);
router.get('/:id', thoughtsController.getThoughtById);
router.post('/', thoughtsController.createThought);
router.put('/:id', thoughtsController.updateThought);
router.delete('/:id', thoughtsController.deleteThought);

module.exports = router;