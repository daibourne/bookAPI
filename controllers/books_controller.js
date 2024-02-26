const express = require('express');
const router = express.Router();
const Books = require('../models/books')

// GET ROUTE
router.get('/books', (req, res) => {
    Books.find().then((books) => {
        res.json(books);
    });
});



module.exports = router;