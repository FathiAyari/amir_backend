var mongoose = require('mongoose');
var scheema = mongoose.Schema;

var User = new scheema({

    name: {
        type: String,
        required: [true, 'name field is required']
    },
    last_name: {
        type: String,
        required: [true, 'last name field is required']
    },
    email: {
        type: String,
        required: [true, 'email name field is required']
    },
    password: {
        type: String,

    },
    role: {
        type: String,
        required: [true, 'role name field is required']
    },
    nick_name: {
        type: String,

    },

});


module.exports = mongoose.model('User', User);