<template>
 <div class="register">
    
     <div class="form-group" >
    <label for="exampleInputEmail1">邮箱</label>
    <input type="text" class="form-control" v-model="email" id='email' placeholder="请输入邮箱" autocomplete="off">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">手机号</label>
    <input type="text" class="form-control" v-model="userId"  id='userId' placeholder="请输入手机号" autocomplete="off">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">用户名</label>
    <input type="text" class="form-control" v-model="userName" id='userName' placeholder="请输入用户名" autocomplete="off">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="userPwd" id='userPwd' placeholder="6位数的Password" autocomplete="off">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="userPwd2" id='userPwd2' placeholder="Password" autocomplete="off">
  </div>
  
 
  
  <button  class="btn btn-default" @click="register">注册</button>
  
 </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
      email:'',
      userId:'',
      userName:'',
      userPwd:'',
      userPwd2:''
    }
},
methods:{
  register(){
      var phone=/^[0-9]{11}$/;
      var email=/^\w+@\w+.{1}\w+$/;
      var pwd=/^[0-9]{6}$/
      if(!phone.test(this.userId)){
          alert('手机号码输入错误')
      }else if(!email.test(this.email)){
        alert('邮箱格式错误')
      }else if(!pwd.test(this.userPwd)){
        alert('请输入6位数的密码')
      }else if(
        !this.userPwd
      ){
        alert('密码为空')
      }else if(this.userPwd!=this.userPwd2){
        alert('两次密码不相同')
      }else{
        axios.post('/users/register',{
          userId:this.userId,
          userPwd:this.userPwd,
          userName:this.userName,
          email:this.email
        }).then((response)=>{
            let res=response.data;
            if(res.status=='1'){
              alert(res.msg)
            }else if (res.status=='0'){
              alert('注册成功');
              this.$router.push({
                path:'/'
              });

            }
        })
      }
  }
},

}

</script>
<style scoped>
.register{
    width: 500px;
}


</style>