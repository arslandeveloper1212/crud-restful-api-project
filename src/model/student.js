const mongoose= require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
        unique: true,
    },
    email: {
        unique: [true , "Eamil id already exist"],
        required: true,
        type : String,
    },
    phone: {
        type : Number,
        unique: true,
        required: true,
        minlength: 7
    },
    address: {
        type: String,
        unique: true,
        required:true,
        minlength: 10,
    }
})


// we create a new model 
const User = new mongoose.model("User", userSchema);

module.exports = User;