const Joi = require('joi');
const mongoose = require('C:\\Users\\swastik.mukherjee\\AppData\\Roaming\\npm\\node_modules\\mongoose');


//Create schema for user data
const userSchema = new mongoose.Schema({
userId : { 
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
},
password: {type: String,
    required: true,
    minlength: 3,
    maxlength: 255
    },
});


//create model
const User = new mongoose.model( 'User' , userSchema); 

//validate req body data usin Joi

function validateUser(user){
    const schema = {
        userId : Joi.string().required(),
        password : Joi.string().required()

    }
    return Joi.validate(user , schema);
}


exports.userSchema = userSchema;
exports.User = User;
exports.validate = validateUser;