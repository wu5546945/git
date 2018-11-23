<template>
 <div >
     <router-link to="content1" class="item"><div class="about" >
         <div class="col-lg-2 left"  >
             <img src="./../../static/1.jpg" >
             
         </div>
            
         <div class="col-lg-10 right" >
             <h4 class="title">Promise用法</h4>
              
                
               
               
         </div>
     </div>
     </router-link>


     <router-link to="content2" class="item"><div class="about" >
         <div class="col-lg-2 left"  >
             <img src="./../../static/1.jpg" >
             
         </div>
            
         <div class="col-lg-10 right" >
             <h4 class="title">CSS弹性布局</h4>
              
                
               
                
         </div>
     </div>
     </router-link>

 <router-link to="content3" class="item"><div class="about" >
         <div class="col-lg-2 left"  >
             <img src="./../../static/1.jpg" >
             
         </div>
            
         <div class="col-lg-10 right" >
             <h4 class="title">web前端优化之图片优化</h4>
              
                
                
                
         </div>
     </div>
     </router-link>

      <router-link to="content4" class="item"><div class="about" >
         <div class="col-lg-2 left"  >
             <img src="./../../static/1.jpg" >
             
         </div>
            
         <div class="col-lg-10 right" >
             <h4 class="title">网页加载速度优化方法总结</h4>
              
                
                
                
         </div>
     </div>
     </router-link>

      <router-link to="content5" class="item"><div class="about" >
         <div class="col-lg-2 left"  >
             <img src="./../../static/1.jpg" >
             
         </div>
            
         <div class="col-lg-10 right" >
             <h4 class="title">js中几种实用的跨域方法原理详解</h4>
              
                
                
               
         </div>
     </div>
     </router-link>

      <router-link to="content6" class="item"><div class="about" >
         <div class="col-lg-2 left"  >
             <img src="./../../static/1.jpg" >
             
         </div>
            
         <div class="col-lg-10 right" >
             <h4 class="title">window.location的各种属性</h4>
              
                
                
               
         </div>
     </div>
     </router-link>

      <router-link to="content2" class="item"><div class="about" >
         <div class="col-lg-2 left"  >
             <img src="./../../static/1.jpg" >
             
         </div>
            
         <div class="col-lg-10 right" >
             <h4 class="title">CSS弹性布局3</h4>
              
                
               
               
         </div>
     </div>
     </router-link>
     

     <nav aria-label="Page navigation" id="nav" @click="getList($event)">
  <ul class="pagination pagination-lg">
    <li><a href="#">上一页</a></li>
    
    <li><a href="#">下一页</a></li>
  </ul>
</nav>
 </div>
 
</template>

<script>
export default {
    data(){
        return{
            page:1,
            num:5
        }
    },
    computed:{
          
    },
    methods:{
        getList(e){
           if(!isNaN($(e.target).html())) this.page=$(e.target).html()
           else if( $(e.target).html()=='上一页'){
               if(this.page==1){ 
                alert('没有上一页了')
           }
               else this.page=parseInt(this.page)-1
                
           }else{
               this.page=parseInt(this.page)+1
           }

           
            var item=document.getElementsByClassName('item');
            for(let i=0;i<item.length;i++){
                    if(i<(this.page-1)*this.num||i>=(this.page)*this.num){
                        item[i].style.display='none'
                    }else{
                         item[i].style.display=''
                    }
            }
        }
    },
   mounted(){
        var nav=document.getElementsByClassName('pagination');
        var items=document.getElementsByClassName('item');
        var count=Math.ceil((items.length)/this.num);
        let i=1
        while(i<=count){
            var li=document.createElement('li')
            var page=document.createElement('a')
            var text=document.createTextNode(i)
            li.appendChild(page)
            page.appendChild(text)
            page.setAttribute('href','#')
            
            
            nav[0].insertBefore( li, nav[0].lastElementChild)
            i++
            console.log(i)
            }
      
   }
        
}

</script>
<style scoped>
#nav{
    position: relative;
    left: 310px;
    width: 400px;
    display: inline-block;
}
.about{
    height:150px;
    width: 80%;
    margin-top: 10px ;
    margin-left: 0px;
    background-color: #fff;
    border-radius: 10px;
    display: inline-block
}

.about:hover{
    background-color:#5E4485;
}
.title{
       font-size: 18px;
    font-weight: 700;
   color: #000;
}
.left{
    
    height:100%;
    

}

.right{
    
    height: 100%;
}
.left img{
   
    height: 130px;
    width: 150px;
    margin:5px auto;
}

.right img{
    width: 50px;
    height: 50px;
    display: inline-block;
}

.right span{
    margin-left:5px;
    font-size: 20px;
}

h3{
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
    

}


</style>