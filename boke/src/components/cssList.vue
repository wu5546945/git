<template>
 <div class="wrap">
     <router-link to="content2" class="item">
         <div class="about">
                <div class="left"  >
                    <img src="./../../static/1.jpg" >
             
                    </div>
            
                <div class="right" >
                        CSS弹性布局
              
                </div>
           </div>
     </router-link>


    <router-link to="content4" class="item">
            <div class="about">
         <div class=" left"  >
             <img src="./../../static/1.jpg" >
             
         </div>
            
         
             <div class="right">网页加载速度优化方法总结</div>
              
                
            </div>    
                
         
    
     </router-link>

 </div>
</template>

<script>
export default {
beforeCreate(){
        this.$store.commit('setpage',{page:'css'})
    },
    destroyed(){
        this.$store.commit('setpage',{page:''})
    }
}

</script>
<style scoped>
*{
    padding: 0px;
}
.wrap{
    display: flex;
    flex-direction: column;
}

.about{
    background-color: #fff;
    width: 1000px;
    height: 120px;
    padding-top:20px;
    font-size: 16px;
        color: #333;
        border-bottom: 1px solid #f4f4f4;
        transition: all 1s;
        margin: 2px;
         
}

.about:hover{
    background-color: #f4f4f4;
    position: relative;
    left: -5px;
    top: -5px;
}


.right{
    float: left;
    
}
.left{
    margin-left: 10px;
    float: left;
}

.left img{
    width: 80px;
    height: 80px;

}
</style>