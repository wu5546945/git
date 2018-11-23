<template>
    <div class="con">
        <div>
        <span>手机号：</span><span id="id">{{userId}}</span></br>
        </div>
        <div class="head">
                <span>头像：</span> <img src="" height="200" alt="Image preview..." id="showpic">
            <input type="file" @change="show" id="in" accept="image/png,image/gif,image/jpeg" style="display:none"><br>
            <button  class="headbtn btn btn-warning" onclick="$('#in').click()">更改头像</button>
        </div>
        <div >
        <span>用户名：</span> <input class="form-control a" name="userName"  v-model="userName">
        </div>
        <div>
            <span>性别：</span>
            
            <label class="radio-inline ">
                <input type="radio" name="sex" id="sex" value="0" v-model="sex"> 男
            </label>
            <label class="radio-inline">
                <input type="radio" name="sex" id="sex" value="1" v-model="sex"> 女
            </label>
        </div>
        <div style="display:none" id="place"> 地方：
            <select id="sheng" @change="getcity" v-model="sheng" >
                <option >----请选择省----</option>
                
            </select>
            <select id="city" v-model="city" >
                <option>请选择市</option>
                
            </select>
            
        </div>
        <div id="place2">
        <span>地方：</span><span class="place2">{{sheng+city}}</span>
        
        </div>
        <button  class=" btn btn-warning " id="changePlace" onclick="$('#place').toggle();$('#place2').toggle();$('#changePlace').toggle();$('#savePlace').toggle()">更改地址</button>
        <button class="btn btn-warning" id="savePlace" onclick="$('#place').toggle();$('#place2').toggle();$('#changePlace').toggle();$('#savePlace').toggle()" style="display:none">保存</button>
        <div>
        <span>用户密码：</span> <input  class="form-control a" name="userPwd"  v-model="userPwd">
        </div>
        <div>
        <span>邮箱</span> <input  class="form-control a" name="email"  v-model="email">
        </div>
        <div>
        <span>简介：</span> <textarea class="form-control introduction" rows="6" v-model="introduction"></textarea>
        </div>
        
        <input class="btn btn-success sub"  value="保存" @click="changemsg">
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            userId:'',
            userName:'',
            userPwd:'',
            email:'',
            introduction:'',
            headImage:'',
            sex:'',
            
            sheng:'',
            city:'',
        }
    },
    methods:{
        getcity(){
                var arr=new Array();
                arr["广东"]=["广州","深圳","珠海","汕头","韶关"] ;
                arr["湖南"]=["长沙","张家界","株洲","怀化","常德"] ;
                document.getElementById('city').options.length=0;
                var s=$('#sheng');
                var c=$("#city");
                var v= s.val();
                for(var i in arr[v]){ 
         c.append(new Option(arr[v][i],arr[v][i]),null);
      }

        },
        getsheng(){
            
                var arr=new Array();
                arr["广东"]=["广州","深圳","珠海","汕头","韶关"] ;
                arr["湖南"]=["长沙","张家界","株洲","怀化","常德"] ;
                
                for(var s in arr){
                    $('#sheng').append(new Option(s,s),null)
                }
                
            
        },
        changemsg(){
            axios.post('/users/change',{
                userId:this.userId,
                userName:this.userName,
                userPwd:this.userPwd,
                headImage:this.headImage,
                email:this.email,
                introduction:this.introduction,
                sex:this.sex,
                sheng:this.sheng,
                city:this.city
            }).then((response)=>{
                if(response.data.status=='0'){
                    alert('保存成功')
                    this.$router.push('/user')
                }else{
                    alert('保存失败')
                }
            })
            
        },
        show() {
            //预览图片
            var preview = document.getElementById('showpic');
            var file = document.getElementById('in').files[0];
            var reader = new FileReader();
            reader.onloadend = function () {
            preview.src = reader.result;
            
            }
            if (file) {
            reader.readAsDataURL(file);
            } else {
            preview.src = "";
            }
            //上传图片
            var param=new FormData()
            param.append('file',file,file.name)
            
            
             let config = {
                    headers: {'Content-Type': 'multipart/form-data'}}
            axios.post('/users/headImage',param,config).then((response)=>{
                if(response.data.status==0){
                    alert('上传成功')
                    this.headImage=response.data.msg
                }else{
                    alert(response.data.msg)
                }
            })


            }


    },
    mounted(){
        this.getsheng();
        this.headImage=this.$cookies.get('headImage')
         var preview = document.getElementById('showpic');
         preview.src='./../../static/' +this.$cookies.get('headImage')
        axios.post('/users/getuser',{userId:this.$cookies.get('userId')}).then((response)=>{
            let res=response.data;
            if(res.status=='0'){
                this.sheng=res.result.sheng;
                this.city=res.result.city;
                this.userId=res.result.userId
                this.userName=res.result.userName;
                this.userPwd=res.result.userPwd;
                this.email=res.result.email;
                this.introduction=res.result.introduction
                this.sex=res.result.sex
            }else{
                alert(res.msg)
            }
        })
    },
    updated(){
        this.$store.commit('setpage',{page:'个人信息'})
    },
    destroyed(){
        this.$store.commit('setpage',{page:''})
    },
}

</script>
<style scoped>
#savePlace{
    display: inline-block;
    position: absolute;
    left: 520px;
    top: 347px;
}
.place2{
    position: relative;
    left: 28px;
}
#sheng{
    position: absolute;
    left: 260px;
    height: 30px;
}

#city{
    position: absolute;
    height: 30px;
    left: 420px;
}
.a{
    display: inline-block;
    width: 200px;
    position: absolute;
    left: 200px;
    
}

 div div{
     height: 50px;
    
 }

 #sheng{
     width: 150px;
 }
    .introduction{
        width: 400px;
    }

    

    .sex{
        background-color: aqua;
    }
    #showpic{
        width: 80px;
        height: 80px;
        border: 1px solid #000;
        display: inline-block;
        position: relative;
        left: 28px;
    }

    #in{
        display: inline-block;
        position: relative;
        left: 28px;
    }
    .head{
        height: 100px;
        
    }

    #id{
        position: relative;
        left: 17px;
    }

    .form-control{
        position: absolute;
        left: 260px;
    }

    .headbtn{
        position:absolute;
        left: 350px;
        top:150px;
    }

    .radio-inline{
        position: relative;
        left: 25px;
    }

    .sub{
        
        position: absolute;
        top:680px;
        left: 260px;
    }

    .con{
        height: 800px;
    }

    #changePlace{
        display: inline-block;
        position: absolute;
        left: 350px;
        top:340px;
        width: 60px;
        width: 90px;
    }
</style>