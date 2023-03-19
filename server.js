var express = require('express');//create express app
require('dotenv').config();
var app = express();

var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
var mongoose = require('mongoose');
var router = require('./routes/api');
const uri = process.env.MONGODB_URI;

mongoose.connect(uri,
    {
        useNewUrlParser: true,

        useUnifiedTopology: true
    }
).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


var connection = mongoose.connection;
connection.on("connected", function () {
    console.log("connected");
});
/*
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use("/", router);
*/


app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
