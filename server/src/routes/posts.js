const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Post = require('../model/post');
var ObjectId = require('mongodb').ObjectID;
router.post('/add', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    console.log(req.body);
    let postData = req.body;
    console.log(postData.title);
    let post = new Post(postData);
    post.save();
});



router.get('/getSinglePost', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    // var id = ObjectId.createFromHexString(req.query._id);
    var id = req.query._id;
    console.log(id);
    Post.find({ _id: id })
        .then(function(posts) {
            console.log(posts + "printed");
            res.send(posts);
        });
});
router.get('/get_posts', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    // var id = ObjectId.createFromHexString(req.query._id);
    var id = req.query._id;
    console.log(id);
    Post.find({ user_id: id })
        .then(function(users) {
            console.log(users);
            res.send(users);
        });
});

router.get('/get_Allposts', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    Post.find()
        .then(function(users) {
            console.log(users);
            res.send(users);
        });
});


router.post('/delete', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    console.log(req.body);
    var id = req.body.id;
    console.log(id + "id get");

    Post.deleteOne({ _id: id })

    .then(function(posts) {
        console.log(posts);
        res.send(posts);
    });

});

router.get('/', (req, res) => {
    res.send("From API");
})


module.exports = router;