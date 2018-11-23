var express = require('express');
var router = express.Router();
var User = require('./../models/user')
var mongoose=require('mongoose')
var fs =require('fs')
var multer = require ('multer')



mongoose.connect('mongodb://127.0.0.1:27017/boke', {useNewUrlParser:true});
mongoose.connection.on('connected',function(){
    console.log('成功连接数据库');
})

mongoose.connection.on("error",function(){
    console.log("失败")
});

mongoose.connection.on("disconnected",function(){
    console.log("断开")
});
router.get('/', function(req, res, next) {
    res.send('users页面');
  });

  



router.post("/login", function(req, res, next) {
    
        var userId=req.body.userId,
        userPwd=req.body.userPwd;
    
   User.findOne({userId:userId,userPwd:userPwd},function(err,doc){
       if(doc){
        res.cookie("userId",doc.userId,{
            path:'/',
            maxAge:1000*60*60*3
          });
          res.cookie("userName",doc.userName,{
            path:'/',
            maxAge:1000*60*60
          });
          res.cookie("headImage",doc.headImage,{
            path:'/',
            maxAge:1000*60*60
          });
           res.json({
               status:'0',
               result:''
           });
           
       }else{
           
        res.json({
            status:'1',
            msg:'某处错误'
        }) 
       }
   })
})


router.post('/register',function(req,res,next){
    var userId=req.body.userId;
    var userName=req.body.userName;
    User.findOne({$or:[{userId:userId},{userName:userName}]},function(err,doc){
        if(doc){
            res.json({
                status:'1',
                msg:'用户名或ID已注册'

            })
        }else{
            var user=new User({
                userId:req.body.userId,
                userName:req.body.userName,
                userPwd:req.body.userPwd,
                headImage:'wqj.jpg',
                email:req.body.email,
                introduction:''
        
            })
            user.save(function(err,doc){
                if(doc){
                    res.json({
                        status:'0',
                        
                    })
                }
            })
        }
    })
    
})
  
router.post('/getuser',function(req,res,next){
    var userId=req.body.userId;
    User.findOne({userId:userId},function(err,doc){
        if(err){
            res.json({
                status:'1',
                msg:'无此帐号'
            })
        }else{
            res.json({
                status:'0',
                result:doc
            })
        }
    })
})
var upload = multer({
    dest: './../../static'
});
router.post('/headImage',upload.single('file'),function(req,res,next){
    var userId=req.cookies.userId;
    var t=req.file.originalname.indexOf('.')
    var cla=req.file.originalname.substring(t)
   
    
    fs.rename(req.file.path, "static/"+userId+cla , function(err) {
        if (err) {
            res.json({
                status:'1',
                msg:''
            })
        }else{
            User.findOne({userId:userId},function(err,doc){
                if(doc){
                    doc.headImage=userId+cla;
                    doc.save(function(err,doc2){
                        if(doc2){
                            res.json(
                                {
                                    status:'0',
                                    msg:userId+cla
                                }
                            )
                        }
                    })
                }
            })

        }
        
    })


})


router.post('/change',function(req,res,next){
    var userId=req.body.userId;
    
    User.findOne({userId:userId},function(err,doc){
        if(doc){
            doc.sex=req.body.sex;
            doc.userName=req.body.userName;
            doc.userPwd=req.body.userPwd;
            doc.headImage=req.body.headImage;
            doc.email=req.body.email;
            doc.introduction=req.body.introduction;
            doc.sheng=req.body.sheng;
            doc.city=req.body.city
            doc.save(function(err,doc1){
                if(doc1){
                    res.json({
                        status:'0'
                    })
                }else{
                    res.json({
                        status:'1'
                    })
                }
            })
        }
    })
})
    
router.post('/getCommenter',function(req,res,next){
    
    User.findOne({userId:req.body.userId},function(err,doc){
        if(err){
            res.json({
                status:'1',
                msg:'无此用户'
            })
        }else{
            res.json({
                status:'0',
                result:doc
            })
        }
    })
})
module.exports = router;
