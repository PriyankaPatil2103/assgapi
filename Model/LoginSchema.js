const mongoose=require('mongoose')

const LoginSchema=mongoose.Schema({
    UserName:String,
    Password:String


})

module.exports=mongoose.model('User',LoginSchema);