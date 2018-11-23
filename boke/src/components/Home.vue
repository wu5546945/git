<template>
 <div class="wrap">
     
     
     <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <router-link to="contentList"><img v-lazy="shu" alt="" ></router-link>
      <div class="carousel-caption">
       
      </div>
    </div>
    <div class="item">
      <router-link to="summary"><img v-lazy="liuyan" alt="" ></router-link>
      <div class="carousel-caption">
       
      </div>
    </div>
    <div class="item">
      <img v-lazy="home" alt="">
      <div class="carousel-caption">
       
      </div>
    </div>

  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


<!-- 下拉导航 -->
    <nav class="nav_drop">
        <ul class="drop_list">
          <li @click="qian">前端</li>
          <li @click="hou">后端</li>
        </ul>
    </nav>


  <!-- 前端 -->
  <div class="list" id="qian">
      <!-- html -->
    <div class="content">
      <div class="intro">
        <h3 class="intro_title">HTML</h3>
        <span class="intro_more">
            <router-link to="htmlList"> 更多>></router-link>
        </span>
      </div>
      <div class="article_con">
        <p class="article_txt">
            超文本标记语言，标准通用标记语言下的一个应用。
            “超文本”就是指页面内可以包含图片、链接，甚至音乐、程序等非文字元素。
              超文本标记语言的结构包括“头”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部 . . .

        </p>
      </div>
    </div>

    <!-- js -->
    <div class="content">
      <div class="intro">
        <h3 class="intro_title">javascript</h3>
        <span class="intro_more">
            <router-link to="jsList"> 更多>></router-link>
        </span>
      </div>
      <div class="article_con">
        <p class="article_txt">
           JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加. . .

        </p>
      </div>
    </div>

    <!-- css -->
    <div class="content">
      <div class="intro">
        <h3 class="intro_title">css</h3>
        <span class="intro_more">
            <router-link to="cssList"> 更多>></router-link>
        </span>
      </div>
      <div class="article_con">
        <p class="article_txt">
            层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化 . . .

        </p>
      </div>
    </div>
  </div>

  <!-- 后端 -->
  <div class="list" id="hou" style="display:none">
      <!-- html -->
    <div class="content">
      <div class="intro">
        <h3 class="intro_title">express</h3>
        <span class="intro_more">
            <router-link to="#"> 更多>></router-link>
        </span>
      </div>
      <div class="article_con">
        <p class="article_txt">
            Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。

使用 Express 可以快速地搭建一个完整功能的网站。

Express 框架核心特性：

1.可以设置中间件来响应 HTTP 请求。

2.定义了路由表用于执行不同 . . . HTTP 请求动作。

3.可以通过向模板传递参数来动态渲染 HTML 页面。

        </p>
      </div>
    </div>

    <!-- js -->
    <div class="content">
      <div class="intro">
        <h3 class="intro_title">node.js</h3>
        <span class="intro_more">
            <router-link to="#"> 更多>></router-link>
        </span>
      </div>
      <div class="article_con">
        <p class="article_txt">
           简单的说 Node.js 就是运行在服务端的 JavaScript。

Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

        </p>
      </div>
    </div>

    <!-- css -->
    <div class="content">
      <div class="intro">
        <h3 class="intro_title">mongodb</h3>
        <span class="intro_more">
            <router-link to="#"> 更多>></router-link>
        </span>
      </div>
      <div class="article_con">
        <p class="article_txt">
            MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。

MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。

        </p>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
    data(){
        return {shu:'../../static/shu.jpg',
        liuyan:'../../static/liuyan.jpg',
        home:'../../static/home.jpg'
        }
    },
    methods:{
        go(){
            this.$router.push('/summary');
            
        },
        qian(){
             $('#qian').fadeToggle('slow')
             
        },
        hou(){
            
            $('#hou').fadeToggle('slow')
        }
    }
}

</script>
<style scoped>
*{
  padding: 0px;
}
.wrap{
  background-color: #FFFFFF
}
.carousel-inner{
    width: 100%;
    height: 400px;
}
img{
    width: 100%;
    height: 400px;
}
.list{
  
  width: 100%;
  
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.content{
  width: 30%;
  height: 187px;
  

}
.intro_title{
  display: inline-block;
  
  color: #333;
      padding-bottom: 8px;
    font-size: 20px;
    font-weight: 400;
}

*{
  margin:0px;
}

.intro_more{
  float: right;
  color: #0457b7;
    text-decoration: none;
    font-size: 14px;
}

.article_con {
    line-height: 30px;
    font-size: 14px;
    color: #5e6267;
}

.article_txt{
  height: 150px;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
}

.drop_list{
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
}

.nav_drop{
  
  background-color: #28282A;
  display: inline-block;
  position: absolute;
  left: 125px;
  top: 500px;
  height: 70px;
}

.drop_list li{
  
  width: 40px;
  height: 25px;
  color: #F4F4F4;
  margin: 5px 0px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
}

.drop_list li:hover{
  cursor: pointer;
}


</style>