<template>

 <div class="wrap">
     
     <div class="list" v-for="(item, index) in commentList" >
         <div>
         <div  class="left" >
             <img v-bind:src="'./../../static/'+item.headImage" class="img-rounded" @click="commenter(item.userId)" id="headImage">
             
         </div>
            
         <div  class="right">
             <h4>{{item.title}}</h4>
              
                <span class="name">{{item.userName}}</span>
                <h5 class="msg">{{item.msg}}</h5>
                <span class="date">评论时间：{{(item.date).slice(0,10)}} </span>
                <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" @click="good(item._id,index)"></span>
                <span class="good" >{{item.good}}</span>

         </div>
         </div>


     </div>


 </div>

    
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
                Id:'',
                commentList:''
        }
    },
    methods:{
        getList(){
            this.Id=this.$route.query.id;
        axios.post('/articles/getcommentList',{
            Id:this.Id,
            
        }).then((response)=>{
           let res=response.data;
            if(res.status=='0'){
                    this.commentList=res.result;
                    
            }
        })
        },
        commenter(Id){
            this.$router.push('/commenter?userId='+Id)

        },
        good(id,index){
                axios.get('/articles/good',{params:{
                    Id:id
                }}).then((response)=>{
                    let res=response.data;
                    if(res.status=='0'){
                        alert('谢谢你的赞');
                        var t=Number($(".good:eq("+index+")").html())+1;
                      $(".good:eq("+index+")").html(t);
                         
                        
                        
                    }else{
                        alert('点赞失败')
                    }
                })
           
        }
    },
    mounted(){
        this.getList()
        
    }
}

</script>
<style scoped>
.wrap{
    margin-top: 30px;
    border-top: 1px solid #ddd;
    padding-top: 20px;
    width: 670px;
}
.list{
    width: 670px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ddd;
}
.left img{
    width: 50px;
    height: 50px;
}

.left :hover{
    cursor: pointer;
}
.left{
    float: left;
}

.right{
    float: left;
    margin-left: 20px;
    margin-bottom: 30px;
   
}

.name{
    color: #64AFE8;
    font-size: 18px;
}

.date{
    font-size: 12px;
    color: #969696;
}

</style>