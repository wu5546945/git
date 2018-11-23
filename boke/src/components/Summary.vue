<template>
 <div class="wrap">

     <!-- 左 -->
    <div class="left">
        <!-- 头行 -->
        <div class="head">
           <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span><span>留言区</span>
        </div>

        <!-- 列表 -->
        <div class="list">
                <div class="item"  v-for="item in articleList" >
                        <img class="img-rounded " v-bind:src="'/static/'+item.headImage">
                        <div class="item_right">
                                <span class="title" @click="go(item._id)"><a>{{item.title}}</a></span>
                               <span class="name"> • {{item.userName}}</span>  <span class="date">• {{(item.date).slice(0,10)}}</span>

                        </div>
                </div>
        </div>
        <!-- 分页 -->
        <nav aria-label="Page navigation" id="nav" @click="changePage($event)">
  <ul class="pagination" >
    <li>
      <a href="#">上一页</a>
    </li>
    
    <li>
     <a href="#">下一页</a>
    </li>
  </ul>
</nav>
    </div>


    <div class="right"  ><div class="input"><router-link to="input">留言</router-link></div></div>
    


     

        
        
 </div>
</template>

<script>
import axios from "axios"

export default {
    data(){
        return{
        articleList:[],
            page:1,
            size:10,
            num:1
        }
    },
    mounted(){
        this.getarticleList();
        this.getnum()
        
        
    },
    methods:{
        getnum(){
            axios.get('/articles/getarticleListNum').then((response)=>{
                this.num=response.data.num
                
                var i=1
             while(i<=Math.ceil( this.num/this.size)){
                var li=$("<li><a href='#'>"+i+"</a></li>")
                $('.pagination li:last').before( li);
                
                i++
            }

            })
        },
        changePage(e){
            
           if(!isNaN($(e.target).html())) this.page=$(e.target).html()
           else if( $(e.target).html()=='上一页'){
               if(this.page==1){ 
                alert('没有上一页了')
           }
               else this.page=parseInt(this.page)-1
                
           }else{
               this.page=parseInt(this.page)+1
           }
           this.getarticleList();
        },
        getarticleList(){
            axios.get('/articles/getarticleList',{params:{
                page:this.page,
                size:this.size
            }}).then((response)=>{
                let res=response.data;
                
                if(res.status=='0'){
                    this.articleList=res.result.list;
                    
                }
                else{
                    alert('获取文章失败')
                }
            })
        },
        go(id){
            this.$router.push({
                path:"/article?id="+id
            });
          
        }
    }
}

</script>
<style scoped>
*{
    padding: 0px;
}
.head{
    height: 62px;
    border-bottom:1px solid #ddd;
    font-size: 25px;

}

.head span{
    display: inline-block;
    margin-left: 10px;
    line-height: 62px;
}
.wrap{
    background-color:#fff;
    width: 958px;
   
    border: 1px solid #ddd;
    display: flex;
}

.wrap::after{
    content: '';
    clear: both;
}

.about{
    display: none;
}

.list{
    height: 780px;
    border-bottom: 1px solid #ddd;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}



.left{
width: 715px;
border-bottom: 1px solid #ddd;
border-right: 1px solid #ddd;

}

.input{
    margin: 0 auto;
    text-align: center;
    padding: 20px;
    border-bottom: 1px solid #ddd;
}


.right{
    padding: 20px;
    width: 243px;
}
.item{
    width: 100%;
    
    height: 78px;
    border-bottom: 1px solid #ddd;
    padding: 14px 0px;
    
}

.item img{
    width: 40px;
    height: 40px;
    float: left;
}

.item_right{
    margin-left: 10px;
    float: left;
    width: 200px;
}
.title :hover{
    cursor: pointer;
}
.title{
    margin-bottom: 6px;
    display: block;
        font-size: 14px;
    line-height: 160%;
    color: #666;
    
}
.title :hover{
    text-decoration: none;
}
.name{
    display: inline-block;
    margin-right: 10px;
        color: #666;
        font-size: 12px;
}

.date{
    display:inline-block;
    color: #999999;
    font-size: 12px;
}

#nav{
    width: 400px;
    margin: 0 auto;
}
</style>