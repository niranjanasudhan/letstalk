const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LetsTalk', { useNewUrlParser: true, useUnifiedTopology: false });
const Schema = mongoose.Schema;

const userSchema = new Schema({
    title: String,
    desc: String,
    user_id: String,



});

module.exports = mongoose.model('post', userSchema, 'posts');