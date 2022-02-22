const mongoose = require("mongoose")


//schema 
const UserSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    email:{
        type:String
           },
    password:{
        type:String
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "role"
    }
})

//model 
const UserModel = mongoose.model("user",UserSchema) //users

module.exports = UserModel 
