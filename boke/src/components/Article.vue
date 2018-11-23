<template>
    <div class="wrap">
         <span class=" glyphicon glyphicon-circle-arrow-left" aria-hidden="true" @click="back" ></span>
        
        <div class="content">
            <p class="title">标题：{{article.title}}</p>
            <p class="article">{{article.content}}</p>
            <button type="button" class="btn btn-danger delete" @click="deleteArticle">删除评论</button>
            
        </div>
        
            <Comment></Comment>
            
            <CommentList></CommentList>

 </div>
</template>


<script>
import axios from "axios"
import Comment from '././Comment'
import CommentList from './CommentList'
export default {
data(){
    return{
        
        article:{},
        title:''
    }
},
components:{
    Comment,
    CommentList
},
methods:{
    

    back(){
        this.$router.go(-1);
    },
    list(){
        var id=this.$route.query.id;
       
        axios.get('/articles/getarticle',{params:{
            id:id
        }}).then((response)=>{
           let res=response.data;
            if(res.status=='0'){
                this.article=res.result.article
                
            }else{
                alert('获取失败')
            }
        })
    },
    deleteArticle(){
        if(!this.$cookies.get('userId')){
            alert('请先登录')
        }else if(this.$cookies.get('userId')!='13246825945'){
                alert('无此权限')
        }
        else{
            axios.post('/articles/delete',{
                articleId:this.$route.query.id
            }).then((response)=>{
                let res=response.data;
            if(res.status=='0'){
                alert("删除成功")
                this.$router.push({
                    path:'/summary'
                })
            }else{
                alert('删除失败')
            }
            })
        }
    }
},
    updated(){
        this.$store.commit('setpage',{page:this.article.title})
    },
    destroyed(){
        this.$store.commit('setpage',{page:''})
    },
    beforeMount(){
        this.list();
       
      
        
    },
}

</script>
<style scoped>
.wrap{
    border-top: 2px solid #000;
}

.delete{
    float: right
}

.glyphicon{
    font-size: 30px;
    position: absolute;
    right: 585px;
    top: 55px;
    color: #337AB7;
}

.glyphicon:hover{
    color: #D9534F;
}

.content{
    margin-bottom: 250px;
}

.title{
    position: relative;
    left: 200px;
    top: 50px;
    font-weight: 700;
    font-size: 20px;
    margin: 0px;
}
.article{
    position: relative;
    top: 70px;
    text-indent: 2em;
    width: 800px;
    
}
</style>