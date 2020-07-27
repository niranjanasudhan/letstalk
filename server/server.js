const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const jwt = require('jsonwebtoken');
const api = require('./src/routes/api');
const post = require('./src/routes/posts');
const book = require('./src/routes/book');
const message = require('./src/routes/message');
const usr = require('./src/routes/usr');
const port = 3000;

const app = express();
app.use(cors());
// app.use(express.static('./public'));
app.use('/public', express.static('public'));
app.use(bodyParser.json());
app.use('/api', api);
app.use('/post', post);
app.use('/book', book);
app.use('/message', message);
app.use('/usr', usr);
app.get('/', (req, res) => {
    res.send("Hello from server");
});
app.listen(port, function() {
    console.log('serving running on localhost:' + port);
});