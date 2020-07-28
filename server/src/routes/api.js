const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const Detail = require('../model/detail');
// const ProductData = require('../models/Productdata');
var ObjectId = require('mongodb').ObjectID;

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }

    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, 'secretKey');
    if (!payload) {
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();

}
router.post('/register', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    let userData = req.body;
    let user = new User(userData);
    user.save((err, registeredUser) => {
        if (err) {
            console.log(err)
        } else {
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({ token })
        }
    });
});

router.post('/login', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    let userData = req.body
    User.findOne({ email: userData.email, user_type: userData.user_type }, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (!user) {
                res.status(401).send('invalid email')
            } else {
                if (user.password !== userData.password && user.user_type !== userData.user_type && user.status !== '1') {
                    res.status(401).send('Invalid Password');
                } else {
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({ token, user })
                        // res.status(200).send(user)
                }
            }
        }
    })
});


router.get('/users', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    // var id = ObjectId.createFromHexString(req.query._id);
    var id = req.query._id;
    User.findOne({ _id: id })
        .then(function(users) {
            console.log(users + "get userssssssssss")
            res.send(users);
        });
});
router.get('/therapist_users', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');

    User.find({ user_type: "psychotherapist" })
        .then(function(users) {
            res.send(users);
        });
});
router.get('/therapist_users_image', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    var id = req.query._id;

    User.findOne({ _id: id })
        .then(function(users) {
            res.send(users);
        });
});


router.get('/getUsersInbox', function(req, res) {
    var type = req.query.type;
    var ext;
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    if (type == "psychotherapist") {
        ext = 'client';
    } else {
        ext = 'psychotherapist';
    }
    console.log(ext);
    User.find({ user_type: ext })
        .then(function(users) {
            console.log(users);
            res.send(users);
        });
});



router.get('/Edit_client_data', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    var id = ObjectId.createFromHexString(req.query._id);
    User.findOne({ _id: id })
        .then(function(users) {
            res.send(users);
        });
});

router.get('/get_details', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    var id = ObjectId.createFromHexString(req.query._id);
    Detail.findOne({ user_id: id })
        .then(function(users) {
            res.send(users);
        });
});



router.post('/updateClientData', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    var user = {
        _id: req.body.user._id,
        name: req.body.user.name,
        gender: req.body.user.gender,
        dob: req.body.user.dob,
        username: req.body.user.username,

    }
    var id = req.body.user._id;
    // var product = new ProductData(product);
    // product.save();
    User.updateOne({ _id: id }, { $set: { 'name': user.name, 'gender': user.gender, 'dob': user.dob, 'username': user.username } }, (err, result) => {
        if (err) {
            return console.log(err);
        }
    });

});


router.post('/updateMoreData', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    console.log(req.body);
    var user = {
        address: req.body.user.address,
        contact_no: req.body.user.contact_no,
        title: req.body.user.title,
        about_me: req.body.user.about_me,
        help: req.body.user.help,
        therapy: req.body.user.therapy,
        facebook: req.body.user.facebook,
        twitter: req.body.user.twitter,
        instagram: req.body.user.instagram,
        linkedin: req.body.user.linkedin,
        user_id: req.body.user.user_id,

    }
    var id = req.body.user.user_id;
    console.log(id + "id get");
    // var product = new ProductData(product);
    // product.save();
    Detail.findOne({ user_id: id })
        .then(function(details) {
            if (details) {
                Detail.updateOne({ user_id: id }, { $set: { 'address': user.address, 'contact_no': user.contact_no, 'title': user.title, 'about_me': user.about_me, 'help': user.help, 'therapy': user.therapy, 'facebook': user.facebook, 'twitter': user.twitter, 'instagram': user.instagram, 'linkedin': user.linkedin } }, (err, result) => {
                    if (err) {
                        return console.log(err);
                    }
                });
            } else {
                let details = new Detail(user);
                details.save();
            }

        });


});
router.get('/getTherapistDetails', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    var id = req.query._id;
    console.log(id);
    Detail.findOne({ user_id: id })
        .then(function(details) {
            console.log(details);
            res.send(details);
        });
});
router.get('/getTherapistBasicData', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    var id = ObjectId.createFromHexString(req.query._id);
    console.log(id);
    User.findOne({ _id: id })
        .then(function(users) {
            console.log(users);
            res.send(users);
        });
});

router.get('/getBookUser', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    var id = ObjectId.createFromHexString(req.query._id);
    console.log(id);
    User.findOne({ _id: id })
        .then(function(users) {
            console.log(users);
            res.send(users);
        });
});





router.get('/', (req, res) => {
    res.send("From API");
})


module.exports = router;