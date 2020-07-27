const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LetsTalk', { useNewUrlParser: true, useUnifiedTopology: false });
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: String,
    therapist_id: String,
    message: String,
    date: String,
    sent_by: String



});

module.exports = mongoose.model('message', userSchema, 'messages');