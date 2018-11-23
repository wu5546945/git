import Vue from 'vue'
import Router from 'vue-router'

import Summary from './../components/Summary'
import Home from './../components/Home.vue'
import Article from './../components/Article.vue'
import ArticleInput from './../components/ArticleInput.vue'
import Register from './../components/Register.vue'
import User from './../components/User.vue'
import Commenter from './../components/Commenter.vue'
import ContentList from './../components/ContentList.vue'
import Content1 from './../components/Content1.vue'
import Content2 from './../components/Content2.vue'
import Content3 from './../components/Content3.vue'
import Content4 from './../components/Content4.vue'
import Content5 from './../components/Content5.vue'
import Content6 from './../components/Content6.vue'
import htmlList from './../components/htmlList.vue'
import cssList from './../components/cssList.vue'
import jsList from './../components/jsList.vue'
import Gupiao from './../components/Gupiao.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components:{
      default:Home,}
    },
        {
          path:'/summary',name:"Summary",component:Summary
      },
    {
      path:'/home',name:"Home",component:Home
    },
    {
      path:'/article',name:"Article",component:Article
    },
    {
      path:'/input',name:"ArticleInput",component:ArticleInput
    },
    {
      path:'/register',name:"Register",component:Register
    },
    {
      path:'/user',name:"User",component:User
    },
    {
      path:'/commenter',name:"Commenter",component:Commenter
    },
    {
      path:'/contentList',name:"ContentList",component:ContentList
    },
    {
      path:'/content1',name:"Content1",component:Content1
    },
    {
      path:'/content2',name:"Content2",component:Content2
    },
    {
      path:'/gupiao',name:"Gupiao",component:Gupiao
    },
    {
      path:'/content3',name:"Content3",component:Content3
    },
    {
      path:'/content4',name:"Content4",component:Content4
    },
    {
      path:'/content5',name:"Content5",component:Content5
    },
    {
      path:'/content6',name:"Content6",component:Content6
    },
    {
      path:'/htmlList',name:"htmlList",component:htmlList
    },
    {
      path:'/cssList',name:"cssList",component:cssList
    },
    {path:'/jsList',name:'jsList',component:jsList}
  
  
      
    
  ],
  mode:'history'
})
