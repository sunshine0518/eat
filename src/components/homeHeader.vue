<template>
  <div>
    <div class="topMenu">
      <span class="city">{{address}}<i class="iconfont" v-html="icon"></i></span>
      <span class="search"><input type="text" :placeholder="search"/></span>
      <span class="myHome"><img :src="imgSrc"></span>
    </div>
    <div class="topBanner">
      <div class="imgDiv" v-for="item in bannerImg">
        <img :src="item.srcUrl" />
      </div>
    </div>
    <div class="homeNav">
      <ul class="nav_ul">
        <li class="nav_list" v-for="item in bottomMenu">
          <router-link :to="item.action">
            <span><img :src="item.img"></span>
            <span class="a_text">{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  name:"homeHeader",
  data(){
    return {
      address:"西安",
      icon:"&#xf02a9;",
      imgSrc:"../../static/img/ic_action_map.png",
      search:"请输入商家、分类或者商圈",
      bannerImg:[{srcUrl:"../../static/img/5b3acc36c3539.jpg"},
        {srcUrl:"../../static/img/5b3b1b239525e.jpg"},
        {srcUrl:"../../static/img/5b3b1bd811341.jpg"},
        {srcUrl: "../../static/img/5b3486250bb94.jpg"},
        {srcUrl:"../../static/img/5b44623809ae7.jpg"}
      ],
      bottomMenu:[{"name":"首页","action":"/","img":"../../static/img/d1.jpg"},{"name":"分类","action":"/","img":"../../static/img/d2.jpg"},
                   {"name":"购物车","action":"/gwc","img":"../../static/img/d3.jpg"},{"name":"我的","action":"/my","img":"../../static/img/d4.jpg"}
      ]
    }

  }
}
</script>
<style>
  .topMenu{
    width:320px;
    height:auto;
    background:#3AC0B5;
    overflow:hidden;
    padding:10px;
  }
  .topMenu span{
    float:left;
    display:inline-block;
  }
  .city,.myHome{
    width:20%;
  }
  .search{
    width:60%;
    height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    background: rgba(0, 0, 0, 0.1);
  }
  .city{
    font-size:14px;
    color:#fff;
  }
  .city i{
    margin-left:5px;
  }
  .myHome img{
    width:25px;
    height:25px;
    float:right;
  }
  .search input{
    padding-left: 23px;
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
    background: url('../../static/img/search_home.png') no-repeat -3px -4px;
    position: relative;
    top: 2px;
    font-size: 0.75em;
    color:#fff;
  }
  .topBanner{
    width:320px;
    height:260px;
    position:relative;
  }
  .imgDiv{
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0px;
  }
  .imgDiv img{
    width:320px;
    height:260px;
  }
  .homeNav{
    width:100%;
    height:auto;
  }
  .nav_ul{
    margin:0;
    padding:0;
    overflow:hidden;
  }
  .nav_list{
    width:25%;
    float:left;
    text-align:center;
    list-style:none;
  }
  .nav_list span{
    display:block;
    width:100%;
    height:auto;
  }
  a img{
    width:50px;
    height:50px;
    margin-top:10px;
  }
  .a_text{
    font-size:12px;
    color:#000;
    margin-top:10px;
  }
</style>
