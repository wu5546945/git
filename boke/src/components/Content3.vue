<template>
 <div>
     

<div>
  <div>
    <p>总结优化的地方有几个地方：</p>
    <ul>
      <li>
        <h2>1、降低图片的大小</h2>
      </li>
    </ul>
    <p>首先我们目前常用的图片格式有png,gif,jpg等，png又分png24和png8,关于图片的的知识点，我给大家两个网址大家可以了解一下，对于图片格式讲的很详细<br />
      <a href="https://link.jianshu.com?t=http://www.cnblogs.com/xiangism/p/5311314.html" target="_blank" rel="nofollow">http://www.cnblogs.com/xiangism/p/5311314.html</a><br />
      <a href="https://link.jianshu.com?t=http://www.cnblogs.com/pqjzxq/p/5749304.html" target="_blank" rel="nofollow">http://www.cnblogs.com/pqjzxq/p/5749304.html</a></p>
    <p>我们的目的是降低图片的大小kb，有很多方法可以做，压缩图片，选择更小kb的图片格式，以达到最优的显示效果</p>
    <p>好多人都推荐一个压缩图片的网站---<a href="https://link.jianshu.com?t=http://zhitu.isux.us/" target="_blank" rel="nofollow">智图：一个图片优化平台</a><br />
      用起来很简单的</p>
    <div>
      <div>
        <div></div>
        <div data-width="1001" data-height="530"><img data-original-src="//upload-images.jianshu.io/upload_images/4113554-7208ea47f07afd41" data-original-width="1001" data-original-height="530" data-original-format="image/png" data-original-filesize="208226" src="//upload-images.jianshu.io/upload_images/4113554-7208ea47f07afd41?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" /></div>
      </div>
      <div></div>
    </div>
    <p>现在百度一下很多在线压缩图的在线网站，比如<a href="https://link.jianshu.com?t=https://tinypng.com/" target="_blank" rel="nofollow">TinyPNG:一个压缩PNG的神站</a></p>
    <ul>
      <li>
        <h2>2、选择适当的图片宽度尺寸（即响应式图片）</h2>
      </li>
    </ul>
    <p>不管是pc还是移动端，都会有很多不同尺寸的图片，如果你做的是响应式网站和移动端的话，那么你就更需要考虑图片尺寸的选择问题了</p>
    <p>移动端的屏幕分辨率和尺寸太多，所以就可能需要不同的尺寸加载不同尺寸的图片，这样就节省了网站的访问流量，以及页面渲染的效率<br />
      先展示现在设备的分辨率等的图</p>
    <div>
      <div>
        <div></div>
        <div data-width="1232" data-height="396"><img data-original-src="//upload-images.jianshu.io/upload_images/4113554-e2ab99e9ee526c1c" data-original-width="1232" data-original-height="396" data-original-format="image/png" data-original-filesize="47757" src="//upload-images.jianshu.io/upload_images/4113554-e2ab99e9ee526c1c?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" /></div>
      </div>
      <div></div>
    </div>
    <div>
      <div>
        <div></div>
        <div data-width="1272" data-height="660"><img data-original-src="//upload-images.jianshu.io/upload_images/4113554-e6c2dc939b2445f6" data-original-width="1272" data-original-height="660" data-original-format="image/png" data-original-filesize="74259" src="//upload-images.jianshu.io/upload_images/4113554-e6c2dc939b2445f6?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" /></div>
      </div>
      <div></div>
    </div>
    <p>如果想查看更多的话，就去<a href="https://link.jianshu.com?t=https://material.io/devices/" target="_blank" rel="nofollow">devices</a></p>
    <p>响应式图片方式有哪几种，</p>
    <blockquote>
      <ul>
        <li>
          <h3>可以通过服务器图片资源配置命名规则来获取图片</h3>
        </li>
      </ul>
    </blockquote>
    <pre>ps：![](bgimg-320.jpg)或![](bgimg-480.jpg)   </pre>
    <ul>
      <li>
        <h3>通过css定义来加载不同的背景bg图片</h3>
      </li>
    </ul>
    <pre>@media only screen and (max-width : 480px) {      .img {background-image: url(bg-480.jpg);}  }  @media only screen and (max-width : 360px) {      .img {background-image: url(bg-360.jpg);}  }  </pre>
    <ul>
      <li>
        <h3>Img的srcset和sizes的方法</h3>
      </li>
    </ul>
    <p>这两个img属性是html5的属性，有浏览器的兼容问题</p>
    <pre>&lt;img class=&quot;img&quot;  src=&quot;imgbg-320.jpg&quot;       srcset=&quot;imgbg-320.jpg 320w, imgbg-360.jpg 360w, imgbg-480px.jpg 480w&quot;       sizes=&quot;(max-width: 480px) 480px, 320px&quot;&gt;  </pre>
    <p>src:当设备不支持srcset，sizes属性时，使用这个图片<br />
      srcset指定图片的地址和对应的图片质量。sizes用来设置图片的尺寸零界点</p>
    <pre>sizes=&quot;[media query] [length], [media query] [length] ... &quot;  </pre>
    <p>对于srcset和sizes，<a href="https://link.jianshu.com?t=http://www.w3cplus.com/css3/srcset-sizes.html" target="_blank" rel="nofollow">详解点击查看</a></p>
    <ul>
      <li>
        <h3> picture标签实现</h3>
      </li>
    </ul>
    <p>通过媒体查询的方式，根据页面宽度（当然也可以添加其他参考项）加载不同图片，具体picture详情<a href="https://link.jianshu.com?t=http://blog.csdn.net/hanks10100/article/details/39012095" target="_blank" rel="nofollow">点击查看</a></p>
    <pre>&lt;picture&gt;        &lt;source srcset=&quot;3.jpg&quot; media=&quot;(min-width: 320px)&quot;&gt;        &lt;source srcset=&quot;2.jpg&quot; media=&quot;(min-width: 480px)&quot;&gt;        &lt;img srcset=&quot;1.jpg&quot;&gt;    &lt;/picture&gt;   </pre>
    <ul>
      <li>
        <h2>3、减少HTTP的网络资源请求</h2>
      </li>
    </ul>
    <blockquote>
      <ul>
        <li>
          <h3>CSSSprites(背景精灵图/雪碧图)</h3>
        </li>
      </ul>
    </blockquote>
    <p>一种网页图片应用处理方式，将一个页面涉及到的所有零星图片或者图标都包含到一张大图里面，这样就只需要加载这个一个图片，而不是很多个图片了，这样就减少了很多http的请求</p>
    <h4>如何制作精灵图？</h4>
    <p>自己通过ps制作，或者UI设计师制作的过程中，做好这个精灵图，注意图片直接的间隔，以防css操作的时候出现显示的问题</p>
    <h4>怎么使用精灵图？</h4>
    <p>利用CSS的background-image，background- repeat，background-position的组合进行背景定位，background-position可以用数字精确的定位出背景图片的位置<br />
      详细查看<a href="https://link.jianshu.com?t=https://baike.baidu.com/item/css%20sprite/1139316" target="_blank" rel="nofollow">CSSSprites</a></p>
    <ul>
      <li>
        <h3> css和css3制作简单的图标和动画（代替gif图片）</h3>
      </li>
    </ul>
    <p>随着技术的发展，css3可以实现的效果越来越多，比如箭头图标，三角形，梯形等图标，或者一些阴影效果，渐变的效果，所以可以用css制作一些简单的图标，而且具有多变性</p>
    <pre>.sanjiaoxing {      width: 0;      height: 0;      border-top: 2em solid #000;      border-right: 1.8rem solid transparent;      border-left: 1.8rem solid transparent;  }  </pre>
    <ul>
      <li>
        <h3>SVG技术替换图片</h3>
      </li>
    </ul>
    <p>SVG 是使用 XML 来描述二维图形和绘图程序的语言,支持透明，缩放，动画<br />
      什么是SVG？(摘自<a href="https://link.jianshu.com?t=http://www.w3school.com.cn/svg/svg_intro.asp" target="_blank" rel="nofollow">w3cschool</a>)<br />
      SVG 指可伸缩矢量图形 (Scalable Vector Graphics)<br />
      SVG 用来定义用于网络的基于矢量的图形<br />
      SVG 使用 XML 格式定义图形<br />
      SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失<br />
      SVG 是万维网联盟的标准<br />
      SVG 与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体</p>
    <ul>
      <li>
        <h3>html5 canvas绘画图形</h3>
      </li>
    </ul>
    <p>目前canvas应用很多，它可以使用脚本javascript来绘制各种图表、动画等<br />
      点击查看更多<a href="https://link.jianshu.com?t=http://www.w3school.com.cn/html5/html5_canvas.asp" target="_blank" rel="nofollow">html5 canvas</a></p>
    <ul>
      <li>
        <h2>4、字体图库代替图标</h2>
      </li>
    </ul>
    <blockquote>
      <p>随着技术的更新和浏览器的更新，字体图库去代替一些图标我认为还是极好的，使用字体图库你不仅可以改变大小，而且还可以改变颜色<br />
        大家比较熟知的的字体图库有很多，这里就说一个吧，<a href="https://link.jianshu.com?t=http://www.bootcss.com/p/font-awesome/" target="_blank" rel="nofollow">font-awesom</a>,截图看看他的好处吧</p>
    </blockquote>
    <blockquote>
      <div>
        <div>
          <div></div>
          <div data-width="997" data-height="731"><img data-original-src="//upload-images.jianshu.io/upload_images/4113554-18e23f1c8f5c7122" data-original-width="997" data-original-height="731" data-original-format="image/png" data-original-filesize="138745" src="//upload-images.jianshu.io/upload_images/4113554-18e23f1c8f5c7122?imageMogr2/auto-orient/strip%7CimageView2/2/w/997/format/webp" /></div>
        </div>
        <div></div>
      </div>
    </blockquote>
    <blockquote>
      <p>有了他，根本不担心图标的问题了，很简单的使用，只需要引入之后，按照规则写html标签即可</p>
    </blockquote>
    <blockquote>
      <h4>其实咱们也可以自定义咱们的图标选择，毕竟有的图标库我们用不到这么多，因此咱们可以自定义咱们的字体图标库</h4>
    </blockquote>
    <p>目前我认为毕竟好的就是 <a href="https://link.jianshu.com?t=http://www.iconfont.cn/" target="_blank" rel="nofollow">Iconfont</a> ,最近的几个react项目，我都在使用这个来定制自己的一些图标库，用起来也很简单</p>
    <ul>
      <li>
        <h5>1、搜索自己想要的图标</h5>
      </li>
    </ul>
    <blockquote>
      <div>
        <div>
          <div></div>
          <div data-width="867" data-height="335"><img data-original-src="//upload-images.jianshu.io/upload_images/4113554-a9f2af3d36f29e2b" data-original-width="867" data-original-height="335" data-original-format="image/png" data-original-filesize="14293" src="//upload-images.jianshu.io/upload_images/4113554-a9f2af3d36f29e2b?imageMogr2/auto-orient/strip%7CimageView2/2/w/867/format/webp" /></div>
        </div>
        <div></div>
      </div>
    </blockquote>
    <blockquote>
      <h5>2、在搜索结果页找到自己想要的图标，然后加入购物车</h5>
    </blockquote>
    <blockquote>
      <div>
        <div>
          <div></div>
          <div data-width="350" data-height="343"><img data-original-src="//upload-images.jianshu.io/upload_images/4113554-fb5d03fc211a9e83" data-original-width="350" data-original-height="343" data-original-format="image/png" data-original-filesize="9367" src="//upload-images.jianshu.io/upload_images/4113554-fb5d03fc211a9e83?imageMogr2/auto-orient/strip%7CimageView2/2/w/350/format/webp" /></div>
        </div>
        <div></div>
      </div>
    </blockquote>
    <blockquote>
      <h5>3、找完自己的图标之后点开购物车，会有一个添加到项目，点击它，如果你有项目就可以选择，如果没有就创建一个项目，点击确定之后即可</h5>
      <h5>4、在个人中心找到自己的项目，选择方式之后，点击下载即可使用</h5>
    </blockquote>
    <div>
      <div>
        <div></div>
        <div data-width="1019" data-height="249"><img data-original-src="//upload-images.jianshu.io/upload_images/4113554-5cf8d6a660cf1744" data-original-width="1019" data-original-height="249" data-original-format="image/png" data-original-filesize="22328" src="//upload-images.jianshu.io/upload_images/4113554-5cf8d6a660cf1744?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" /></div>
      </div>
      <div></div>
    </div>
    <p>使用方式在这里就不多说了，和font-awesom基本上差不多的</p>
    <ul>
      <li>
        <h2>5、微信小程序怎么使用字体图标</h2>
      </li>
    </ul>
    <blockquote>
      <p>直接引入字体也可以，但是要把字体文件放在服务器上，并且允许跨域的情况下，在css文件里面远程地址引入字体文件即可</p>
    </blockquote>
    <pre>@font-face {font-family: &quot;iconfont&quot;;    src: url('https//examle.com/font/iconfont.eot?t=1494498562077'); /* IE9*/    src: url('https//examle.com/font/iconfont.eot?t=1494498562077#iefix') format('embedded-opentype'), /* IE6-IE8 */    url('https//examle.com/font/iconfont.woff?t=1494498562077') format('woff'), /* chrome, firefox */    url('https//examle.com/font/iconfont.ttf?t=1494498562077') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/    url('https//examle.com/font/iconfont.svg?t=1494498562077#iconfont') format('svg'); /* iOS 4.1- */  }  </pre>
    <blockquote>
      <p>如果不想放在服务器上，还有一种方法可以使用，这个时候我们需要一个工具来辅助一下 <a href="https://link.jianshu.com?t=https://transfonter.org/" target="_blank" rel="nofollow">transfonter</a>,将解压出来的ttf字体文件转化成base64格式</p>
    </blockquote>
    <div>
      <div>
        <div></div>
        <div data-width="855" data-height="624"><img data-original-src="//upload-images.jianshu.io/upload_images/4113554-572045526c56f447" data-original-width="855" data-original-height="624" data-original-format="image/png" data-original-filesize="80676" src="//upload-images.jianshu.io/upload_images/4113554-572045526c56f447?imageMogr2/auto-orient/strip%7CimageView2/2/w/855/format/webp" /></div>
      </div>
      <div></div>
    </div>
    <p>生成的文件里面替换css里面的代码</p>
    <pre>@font-face {      font-family: 'iconfont';      src: url(data:font/truetype;charset=utf-8;base64,这里省略了) format('truetype');      font-weight: 500;      font-style: normal;  }  </pre>
    <p>使用和直接引入字体图标是一样的</p>
    <ul>
      <li>
        <h2>6、图片延迟加载（懒惰加载）（js/lazyload.js）</h2>
      </li>
    </ul>
    <blockquote>
      <p>有个页面会很大很长很多的图片素材，这样全部加载就会变的很慢，因此需要修改一下加载方案，只加载窗口内的图片，我们大家浏览网站的时候会经常看到会有默认图，图片加载成功之后会替换默认图<br />
        比如常用的lazyload.js用于图片的延迟加载，视口外的图片会在窗口滚动到它的位置时再进行加载，这是与预加载相反的，。</p>
    </blockquote>
    <ul>
      <li>能有效的提高页面加载速度</li>
      <li>有时候可以帮助减少服务器负载</li>
    </ul>
    <blockquote>
      <p>用法：<a href="https://link.jianshu.com?t=http://code.ciaoca.com/jquery/lazyload/" target="_blank" rel="nofollow">lazyload.js</a></p>
    </blockquote>
  </div>
  <br />
  <br />
  作者：程序蜗牛<br />
  链接：https://www.jianshu.com/p/b55e951e9f03<br />
  來源：简书<br />
  简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。</div>
 </div>
</template>

<script>
export default {

}

</script>
<style>
</style>