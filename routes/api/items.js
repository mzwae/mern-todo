const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');

//@route GET api/items
//@desc Get all items
//@access Public
router.get('/', (req, res) => {
	Item
	.find()
	.sort({ date: -1})//sort in decending order
	.then(items => res.json(items));
});


//@route POST api/items
//@desc Create an item
//@access Public
router.post('/', (req, res) => {
	const newItem = new Item({
		name: req.body.name
	});

	newItem
	.save()
	.then(item => res.json(item));
});


// @route DELETE api/items/:id
// @desc Delete an item
// @access Public
router.delete('/:id', (req, res) => {
	Item
	.findById(req.params.id)
	.then(item => item.remove().then(() => res.json({ItemDeleted: true})))
	.catch(err => res.status(404).json({ ItemDeleted: false}));
});

module.exports = router;