<template>
 <div class="wrap">
     <div id="userName" >
            姓名：{{user.userName}}  
            <span class=" glyphicon glyphicon-circle-arrow-left" aria-hidden="true" @click="back" id="back"></span>
     </div>
     <div id="headImage">
            头像：<img v-bind:src="'./../../static/'+user.headImage">
     </div>
        <div id="email">
            邮箱：{{user.email}}
        </div>
        <div id="sex">
            性别：<div v-show="user.sex=='0'" style="display:inline-block">男</div>
            <div v-show="user.sex=='1'" style="display:inline-block">女</div>
        </div>
        <div id="place">
            地址：{{user.sheng+user.city}}
        </div>
        <div id="introduction">
            简介：{{user.introduction}}
        </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            user:{}
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        getCommenter(){
            axios.post('/users/getCommenter',{
                userId:this.$route.query.userId
            }).then((response)=>{
                let res=response.data
                if(res.status=='1'){
                    alert(res.msg)
                }else{
                    this.user=res.result
                    
                }
            })
        }
    },
    mounted(){
        this.getCommenter();
    }
}

</script>
<style scoped>
#headImage img{
    width: 70px;
    height: 70px;
}

div>div{
    margin-top:20px;
}

#back{
    position: relative;
    left: 200px;
    font-size: 30px;
}
#back:hover{
    color:#f40;
}

.wrap{
    border: solid 3px #000;
    width: 400px;
    padding-left: 50px;
    position: relative;
    left: 350px;
    border-radius: 10px;
    padding-bottom: 30x;
}
</style>