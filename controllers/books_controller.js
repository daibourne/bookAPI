const express = require('express');
const router = express.Router();
const Books = require('../models/books')

// GET ROUTE
router.get('/books', (req, res) => {
    Books.find().then((books) => {
        res.json(books);
    });
});

// SHOW ROUTE
router.get('/books/:id', (req, res) => {
    Books.findOne({ name: req.params.name.toLowerCase() })
    .then((books) => {
        res.json(books);
    })
    .catch((err) => {
        res.status(404).json({ msg: 'Book not found' });
    });
});

module.exports = router;