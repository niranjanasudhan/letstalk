const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Schema
let usrSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String
    },
    avatar: {
        type: String
    },
}, {
    collection: 'usrs'
})

module.exports = mongoose.model('usr', usrSchema)