var mongoose = require('mongoose');
var scheema = mongoose.Schema;

var User = new scheema({

    name: {
        type: String,
        required: [true, 'name field is required']
    },
    lastName: {
        type: String,
        required: [true, 'last name field is required']
    },
    email: {
        type: String,
        required: [true, 'email name field is required']
    },
    password: {
        type: String,
        required: [true, 'password name field is required']
    },
    role: {
        type: String,
        required: [true, 'role name field is required']
    },

});


module.exports = mongoose.model('User', User);