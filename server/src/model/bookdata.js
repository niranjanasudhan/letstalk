const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LetsTalk', { useNewUrlParser: true, useUnifiedTopology: false });
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    dob: String,
    email: String,
    contact_no: String,
    service: String,
    cdate: String,
    therapist_id: String


});

module.exports = mongoose.model('booking', userSchema, 'bookings');