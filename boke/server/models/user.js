var mongoose = require("mongoose")
var Schema=mongoose.Schema;

var userSchema=new Schema({
    'userId':String,
    'userName':String,
    'userPwd':String,
    "headImage":String,
    "email":String,
    'introduction':String,
    'sex':String,
    'sheng':String,
    'city':String

})

module.exports=mongoose.model('User',userSchema)
