<template>
 <div>
     
     <span>标题：</span>
     <textarea class="form-control title" rows="1" v-model="title"></textarea>
     <textarea class="form-control articleInput" rows="3" v-model="msg"></textarea>
     <button type="button " class="btn btn-success submit btn-primary" @click="out" >发布</button>
     <span class=" glyphicon glyphicon-circle-arrow-left" aria-hidden="true" @click="back"></span>
 </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            msg:'',
            title:''
        }
    },
    computed:{
        
        
    },
    beforeMount(){
        this.$store.commit('setpage',{page:'写留言'})
    },
    beforeDestroy(){
            this.$store.commit('setpage',{page:''})
    },
    methods:{
         back(){
        this.$router.go(-1);
    },
        out(){
            if(!this.$cookies.get('userId')){
                alert('请先登录')
            }else{
                
                axios.post('/articles/output',{
                    headImage:this.$cookies.get('headImage'),
                    title:this.title,
                    articleImage:'shutiao.jpg',
                    userName:this.$cookies.get('userName'),
                    date:new Date(),
                    content:this.msg
                }).then((response)=>{
                    let res=response.data;
                    if(res.status=='0'){
                        alert('发布成功')
                        this.$router.push({
                            path:'/summary'
                        })
                    }else{
                        alert('发布失败')
                    }
                })
            }
        }
    }
}

</script>
<style scoped>
    .articleInput{
        width: 40%;
        height: 200px;
    }

    .submit{
        margin-top:10px;

    }
    .title{
        width:200px;
        margin-bottom: 5px;
        display:inline-block;
       
    }
    span{
       display: inline-block;
       
       position: relative;
       bottom: 18px;
       font-weight: bolder
    }
    .glyphicon{
    font-size: 30px;
    position: absolute;
    right: 810px;
    top: 55px;
    color: #337AB7;
}

.glyphicon:hover{
    color: #D9534F;
}
</style>