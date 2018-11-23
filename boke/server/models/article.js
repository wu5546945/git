var mongoose=require('mongoose')
var Schema=mongoose.Schema

var articleSchema=new Schema({
    "headImage":String,
    'title':String,
    'articleImage':String,
     "userName":String,
     'date':Date,
     'content':String
})


module.exports=mongoose.model('article',articleSchema)