<template>
 <div>
     <p>对于这样一个URL<br />
  代码如下 复制代码</p>
<p>http://www.php230.com :80/fisker/post/0703/window.location.html?ver=1.0&amp;id=6#imhere</p>
<p>我们可以用javascript获得其中的各个部分<br />
  1, window.location.href<br />
  整个URl字符串(在浏览器中就是完整的地址栏)<br />
  本例返回值:<br />
  代码如下 复制代码<br />
  http://www.php230.com :80/fisker/post/0703/window.location.html?ver=1.0&amp;id=6#imhere</p>
<p>2,window.location.protocol<br />
  URL 的协议部分<br />
  本例返回值:http:</p>
<p>3,window.location.host<br />
  URL 的主机部分<br />
  本例返回值:www.php230.com</p>
<p>4,window.location.port<br />
  URL 的端口部分<br />
  如果采用默认的80端口(update:即使添加了:80)，那么返回值并不是默认的80而是空字符<br />
  本例返回值:&quot;&quot;</p>
<p>5,window.location.pathname<br />
  URL 的路径部分(就是文件地址)<br />
  本例返回值:/fisker/post/0703/window.location.html</p>
<p>6,window.location.search<br />
  查询(参数)部分<br />
  除了给动态语言赋值以外，我们同样可以给静态页面,并使用javascript来获得相信应的参数值<br />
  本例返回值:?ver=1.0&amp;id=6</p>
<p>7,window.location.hash<br />
  锚点<br />
  本例返回值:#imhere</p>
 </div>
</template>

<script>
export default {

}

</script>
<style>
</style>