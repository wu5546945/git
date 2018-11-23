<template>
 <div class="wrap">
     <div class="input-left " >
         <img  v-bind:src="'./../../static/'+headImage" v-if="userId" class="img-circle">
         <img  v-bind:src="'./../../static/comment.jpg'" v-else class="img-circle">
     </div>
     <div class="input-right ">
         <textarea class="form-control" rows="6" placeholder='输入你的评论吧' v-model="msg"></textarea>
         <button type="button" class="btn btn-success " @click="addcomment">提交评论</button> 
       

     </div>
 </div>
</template>

<script>
import axios from 'axios'

export default {
data(){
    return{
        headImage:'',
        userId:'',
        Id:'',
        commentList:[],
        msg:'',
        userName:'',
        date:'',
        
    }
},

methods:{
    
    addcomment(){
        this.data=new Date().toLocaleString().slice(0,10);
        if(!this.userId){
            alert('请先登录');

        }else if(!this.msg){
                alert('请输入内容')
        }
        else{
            
            axios.post('/articles/addcomment',{
                headImage:this.headImage,
                userId:this.userId,
                Id:this.Id,
                
                msg:this.msg,
                userName:this.userName,
                date:new Date()
            }).then((response)=>{
                
                if(response.data.status=='0'){
                    alert('评论成功')
                    this.$router.go(0);
                }else{
                    alert('评论失败')
                }
            })
        }
    },
   
},
mounted(){
    this.headImage=this.$cookies.get('headImage');
    this.userId=this.$cookies.get('userId');
    this.Id=this.$route.query.id;
    this.userName=this.$cookies.get('userName');
    
}
}

</script>
<style scoped>
.wrap{
    padding-top: 20px;
    border-top: 2px solid #000;
}
.input-left{
float: left;

height: 100px;
width: 70px;

}

.input-right{
    display: inline-block;
    height: 200px;
    
}
img{
    width: 50px;
    height: 50px;
    margin-top:40px;
    
}
textarea{
    width:600px;
}

.input-right .btn{
    margin-top: 10px;
}
</style>