const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LetsTalk', { useNewUrlParser: true, useUnifiedTopology: false });
const Schema = mongoose.Schema;

const userSchema = new Schema({
    address: String,
    contact_no: String,
    title: String,
    about_me: String,
    help: String,
    therapy: String,
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String,
    user_id: String,

});

module.exports = mongoose.model('Detail', userSchema, 'Details');