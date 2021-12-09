const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    resetToken:String,
    expireToken:Date,
    pic:{
     type:String,
     default:"https://res.cloudinary.com/extralove/image/upload/v1627491330/WhatsApp_Image_2021-07-28_at_10.23.19_PM_fndopn.jpg"
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})

mongoose.model("User",userSchema)


// https://res.cloudinary.com/extralove/image/upload/v1627491330/WhatsApp_Image_2021-07-28_at_10.23.19_PM_fndopn.jpg