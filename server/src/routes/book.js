const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Book = require('../model/bookdata');

// const ProductData = require('../models/Productdata');
var ObjectId = require('mongodb').ObjectID;


router.post('/book', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    let userData = req.body;
    console.log(userData);
    let book = new Book(userData);
    book.save();

});

router.get('/bookings', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    var id = req.query._id;

    Book.find({ therapist_id: id })
        .then(function(book) {
            console.log(book + "dataaaaaaaaaaa")
            res.send(book);
        });

});

router.get('/', (req, res) => {
    res.send("From API");
})


module.exports = router;