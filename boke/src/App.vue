<template>
  <div id="app">
    
    <div class="body">
        <nav-header></nav-header>
        <div class="container">
        <nav>
      
            <ul class="navigator">
      
  
              <li><router-link to="home" >主页</router-link></li>
              <li><router-link to='contentList'>学习</router-link></li>
              <li><router-link to="summary">留言</router-link></li>
               <li ><router-link to="#">{{page}}</router-link></li>
  
  
            </ul>
        </nav>
        
  <div class="content">
    <router-view>
    </router-view>
  </div>
  </div>
  <nav-footer></nav-footer>
  </div>
  </div>
  
</template>

<<script>
import NavHeader from'./components/NavHeader'
import NavFooter from './components/NavFooter'
import Modal from './components/Modal'

export default {
  
  data () {
    return {
      
    }
  },
  components:{
    NavHeader,
    NavFooter,
    Modal
  },
  methods:{
    
    
    
  },
    
  computed: {
    page(){
      return this.$store.state.page
    }
  }
  
  
    


  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{
  padding: 0px;
}
#app{
  background-color: #F4F4F4;
}


.navigator{
  margin-top:5px;
  margin-bottom:5px;
  list-style: none;
  display: flex;
  
  justify-content:flex-start;
  padding-left: 0px;
  padding-bottom: 30px;
  
}

.navigator li{
  width: 60px;
  
  height: 40px;
  margin-right: 8px;
  text-align: center;
  font-size: 15px;
}

.navigator li a{
  
  color: #000;
  font-weight: bold;
  transition: border 0.3s;
  display: inline-block;
  margin-top: 7px;
  padding-top: 5px;
  
}

.navigator li a.router-link-active{
  
  color: #000;
  font-weight: bold;
  border-top: 2px solid #000;
  display: inline-block;
  margin-top: 7px;
  padding-top: 5px;
  text-decoration: none;
  
}

.navigator li a:hover{
  color: #000;
  font-weight: bold;
  border-top: 3px solid #000;
  display: inline-block;
  margin-top: 7px;
  padding-top: 5px;
  text-decoration: none;
}

.content{
  min-height: 600px;
  margin-top: 2px;
}


</style>
