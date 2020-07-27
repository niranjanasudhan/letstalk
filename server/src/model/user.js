const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LetsTalk', { useNewUrlParser: true, useUnifiedTopology: false });
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_type: String,
    name: String,
    gender: String,
    dob: String,
    username: String,
    email: String,
    password: String,
    status: String,
    image: String


});

module.exports = mongoose.model('user', userSchema, 'users');