<template>
 <div id="wrap">
     <div id="head-left">
         <img src="./../../static/狗头.jpg" height="50px">
         <span>帅健的博客</span>
         
     </div>
         <div id='head-right'>
             <div class="usermsg" v-if="userName">
                 <img  class='headpic' v-bind:src="'/static/'+headImage" @click="user"  >
                 
             <span >{{userName}}</span>
             </div>
             <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal" v-else>登录</button>
             <button type="button" class="btn btn-danger" @click="logout">注销</button>
             <button type="button" class="btn btn-primary" v-show="!userName" @click="register">注册</button>
         </div>
          <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">登录</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" >
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">手机</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="phone" placeholder="手机号码" v-model="userId">
    </div>
  </div>
  
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="userPwd" placeholder="Password" v-model="userPwd">
    </div>
  </div>
  
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      
    </div>
  </div>
</form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" @click="login">登录</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>
 </div>
 
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            userId:'',
           headImage:'',
            userPwd:'',
            userName:''
            
        }
    },
    methods: {
        
        user(){
            this.$router.push('/user')
        },
        register(){
                this.$router.push({
                    path:'/register'
                })
        },
        login(){
            
            axios.post('/users/login',{
                userId:this.userId,
                userPwd:this.userPwd
            }
            ).then((response)=>{
                
                let res=response.data;
                if(res.status=='0'){
                    
                    alert('登录成功');
                   
                        
                      
                       $('#myModal').modal('toggle')
                       this.userName= window.$cookies.get('userName');
                        this.userId= window.$cookies.get('userId');
                        this.headImage= window.$cookies.get('headImage');
                       this.$router.go(0)
                }else{
                    alert('登录失败');
                    this.userPwd='';
                }
            })
              
                
        },
        logout(){
            window.$cookies.remove('userName');
            window.$cookies.remove('userId');
            window.$cookies.remove('headImage');
           this.userName='';
            
        },
        
        
        
    },
    computed:{
       
        
        


    },
    mounted(){
       this.userName= window.$cookies.get('userName');
       this.userId= window.$cookies.get('userId');
       this.headImage= window.$cookies.get('headImage');
  },
}

</script>
<style scoped>
#wrap{
    background-color:#66CCCC;
    height:50px;
    width: 100%;
    
    
}

#wrap span{
    font-family:Arial;
}

#head-left{
    
    float: left;
    
}

#head-right{
    float: right;
    margin-right: 50px;
    line-height: 50px;
}


.usermsg{
    display: inline-block;
    height: 100%;
    line-height: 50px;
    font-size: 18px;
    margin-right: 10px;
}

.headpic{
    height:50px;
    margin-right: 10px;
    cursor: pointer;
}

</style>