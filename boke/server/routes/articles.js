var express = require('express');
var router = express.Router();

var mongoose=require('mongoose')
var Article = require('./../models/article')
var Comment = require('./../models/comment')


router.get('/getarticleListNum',function(req,res){
    var num=null;
    Article.find({},function (err,doc) {
        if(err){
            console.log(err)
        }else{
            num=doc.length
            res.json({
                num:num
            })
        }
      })
})

router.get('/getarticleList',function(req,res,next){
    var size=parseInt(req.query.size);
    var page=parseInt(req.query.page);
    var skip=(page-1)*size;
    
    var articlesModel=Article.find().skip(skip).limit(size);
    articlesModel.find({},function(err,doc){
        if(err){
            res.json({
                status:'1',
                msg:err.message
            })
        }
        else{
            res.json({
                status:'0',
                msg:'',
                result:{
                    
                    list:doc
                }
            })
        }
    })
})

router.get('/getarticle',function(req,res,next){
    var id=req.param('id');
    
    Article.findOne({_id:id},function(err,doc){
        
        if(err){
            res.json({
                status:'1',
                msg:err.message
            })
        }
        else{
            res.json({
                status:'0',
                msg:id,
                result:{
                    article:doc
                    
                }
            })
        }
    })
})

router.post('/addcomment',function(req,res,next){
    
    var comment=new Comment({
        'articleId':req.body.Id,
    'userId':req.body.userId,
    'headImage':req.body.headImage,
    'userName':req.body.userName,
    'msg':req.body.msg,
    'date':req.body.date,
    'good':0
    })

    comment.save(function(err,doc){
        if(err){
            res.json({
              status:"1",
              msg:err.message,
              result:''
            })
          }else{
            res.json({
                status:'0',
                msg:'',
                result:comment
            })
          }
    })
    

   
})

router.post('/getcommentList',function(req,res,next){
    var Id=req.body.Id;
    
    Comment.find({articleId:Id},(err,doc)=>{
        if(err){
            res.json({
                status:"1",
                msg:err.message,
                result:''
              })
        }else{
            res.json({
                status:"0",
                msg:'',
                result:doc.reverse()
              })
        }
    })
})

router.get('/good',function(req,res,next){
    var Id=req.param('Id');
    Comment.findOne({_id:Id},(err,doc)=>{
        if(err){
            res.json({
                status:"1",
                msg:err.message,
                result:''
              })
        }else{
            doc.good++;
            doc.save(function(err,doc1){
                if(err){
                    res.json({
                        status:"1",
                        msg:err.message,
                        result:''
                      })
                }else{
                    res.json({
                        status:"0",
                        msg:'',
                        result:''
                      })
                }
            })
        }
    })
})

router.post('/output',function(req,res,next){
    var article=new Article({
                    'headImage':req.body.headImage,
                    'title':req.body.title,
                    'articleImage':req.body.articleImage,
                    'userName':req.body.userName,
                    'date':req.body.date,
                    'content':req.body.content
    });
    
    article.save(function(err,doc){
        if(err){
            res.json({
              status:"1",
              msg:err.message,
              result:''
            })
          }else{
            res.json({
                status:'0',
                msg:'',
                result:''
            })
          }
    })
    
})

router.post('/delete',function(req,res,next){
    var id=req.body.articleId;
    Article.findOne({_id:id},function(err,doc){
        doc.remove(function(err1,doc1){
            if(err1){
                res.json({
                    status:"1",
                    msg:err.message,
                    result:''
                  })
            }else{
                res.json({
                    status:'0',
                    msg:'',
                    result:''
                })
            }
        })
    })
})
module.exports = router;