var mongoose=require('mongoose')
var Schema = mongoose.Schema

var commentSchema=new Schema({
    'articleId':String,
    'userId':String,
    'headImage':String,
    'userName':String,
    'msg':String,
    'date':Date,
    'good':Number
})

module.exports=mongoose.model('comment',commentSchema)