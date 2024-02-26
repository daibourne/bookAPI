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

// UPDATE BOOK ROUTE
router.put('/books/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id)
    .then((updatedBook) => {
        res.json(Books);
    })
    .catch((err) => {
        res.status(404).json({ msg: 'Book not found' });
    });
});

// DELETE ROUTE
router.delete('/books/:id', (req, res) => {
    Books.findByIdAndDelete(req.params.id)
    .then(Books => {
        res.json(Books);
    })
    .catch((err) => {
        res.status(404).json({ msg: 'Book not found' });
    });
});


// ADD BOOK ROUTE
router.post('/books', (req, res) => {
    Books.find().then(Books => {
        res.json(Books);
    });
});

module.exports = router;