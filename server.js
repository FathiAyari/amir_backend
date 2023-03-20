const express = require('express');//create express app
require('dotenv').config();
const app = express();

const bodyParser = require('body-parser');
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const router = require('./routes/api');
const uri = process.env.MONGODB_URI;

/*mongoose.connect(uri,
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());*/
/*app.use("/", router);*/
app.get('/home',function (req, res){
    res.json('welcome to amir backend apis')
});

app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
