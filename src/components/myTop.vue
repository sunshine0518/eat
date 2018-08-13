<template>
  <div class="userHeader">
    <div class="userHeader_name">
      <span class="icon_span"><router-link :to="action"><i class="iconfont icon_back" v-html="backIcon"></i></router-link></span>
      <span class="userName_span" v-html="user[0].userName"></span>
    </div>
    <div class="userHeader_img">
      <div>
        <img class="user_image" :src="user[0].userImg">
      </div>
    </div>
    <div class="userHeader_nav">
      <ul class="userHeader_ul">
        <li v-for="item in dingdan">
          <span class="dingdan_num">{{item.num}}</span>
          <span class="dingdan_status">{{item.status}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name:"myTop",
    data(){
      return {
        action:"/",
        user:[{userName:"郭小帅",userImg:"../../static/img/head01.jpg"}],
        backIcon:"&#xf0292;",
        dingdan:[{status:"待付款",num:2},{status:"待发货",num:1},{status:"配送中",num:0},{status:"已完成",num:36}]
      }
    }
  }
</script>
<style scoped>
  .userHeader {
    width: 320px;
    height: auto;
    background: #fff;
    padding-bottom:15px;
  }
  .userHeader_name{
    width:100%;
    height:auto;
    padding:10px 2%;
    overflow:hidden;
    background:#3AC0B5;
  }
  .icon_span{
    width:20px;
    height:20px;
    display:inline-block;
    text-align:center;
    line-height:20px;
    border:2px solid #EDEDED;
    background:#CCCCCC;
    color:#fff;
    border-radius:50%;
    float:left;
    position:relative;
    top:5px;
  }
  .icon_span a i{
    color:#fff;
  }
  .icon_back{
    position:relative;
    top:-3px;
  }
  .userName_span{
    color:#fff;
    font-size:16px;
    display:inline-block;
    float:left;
    margin-left:35%;
    height:30px;
    line-height:30px;
  }
  .userHeader_img{
    width:100%;
    height:120px;
    text-align:center;
    margin-top:20px;
  }
  .user_image{
    width:100px;
    height:100px;
    border:1px solid transparent;
    border-radius:50%;
  }
  .userHeader_nav{
    width:100%;
    height:auto;
    overflow:hidden;
  }
  .userHeader_ul{
    margin:0;
    padding:0;
    overflow:hidden;
  }
  .userHeader_ul li{
    float:left;
    width:25%;
    text-align:center;
    list-style:none;
    color:#3AC0B5;
  }
  .userHeader_ul li span{
    display:block;
  }
  .dingdan_num{
    font-size:12px;
  }
  .dingdan_status{
    font-size:14px;
    margin-top:5px;
  }
</style>
