const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Message = require('../model/messagedata');

var ObjectId = require('mongodb').ObjectID;


router.post('/add', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    let userData = req.body;
    let message = new Message(userData);
    message.save(userData);
});

router.get('/view_message', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    var id = ObjectId.createFromHexString(req.query._id);
    var tid = req.query.tid;
    //Message.find({ user_id: id, therapist_id: tid }).sort({ date: 1 })

    Message.find({
            $or: [
                { $and: [{ user_id: id }, { therapist_id: tid }] },
                { $and: [{ user_id: tid }, { therapist_id: id }] }
            ]
        })
        .then(function(users) {
            console.log(users);
            res.send(users);
        });
});
router.get('/', (req, res) => {
    res.send("From API");
})
router.get('/view_all_message', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    var id = ObjectId.createFromHexString(req.query._id);

    Message.find({ user_id: id }).distinct('therapist_id')
        .then(function(users) {
            console.log(users)
            res.send(users);
        });
});
router.get('/view_all_messageTherapist', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    // var id = ObjectId.createFromHexString(req.query._id);
    var id = req.query._id;
    console.log(id);
    Message.find({ therapist_id: id }).distinct('user_id')
        .then(function(users) {
            console.log(users)
            res.send(users);
        });
});


router.get('/', (req, res) => {
    res.send("From API");
})



module.exports = router;