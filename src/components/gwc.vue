<template>
  <div>
    <div class="gwc_top">
      <span class="icon_span"><router-link :to="action"><i class="iconfont" v-html="icon"></i></router-link></span>
      <span class="gwc_title">{{name}}</span>
    </div>
    <div class="gwc_bottom">
      <div class="gwc_Div">
        <div class="gwc_list" v-for="item in foodData">
          <div class="gwc_list_l">
            <img :src="item.icon">
          </div>
          <div class="gwc_list_r">
            <span class="span_Name">{{item.name}}</span>
            <span class="span_price"><span class="now_price">{{item.price}}元</span><span class="menshi"><del>门市价:{{item.foodMS}}元</del></span></span>
            <span class="span_count"><span class="num">×{{item.number}}</span><span class="add">+</span><span class="sub">-</span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="gwc_fixed">
      <div class="fixed_l">
        <span>结算{{total}}元</span>
      </div>
      <div class="fixed_r">
        <span>提交订单</span>
      </div>
    </div>
  </div>
</template>
<script>
  import dataInfo from '@/components/dataInfo'
  export default{
    name:"gwc",
    data(){
      return {
        name:"购物车",
        icon:"&#xf0292;",
        total:0,
        foodData:[],
        action:"/sg"
      }
    },
    created:function (){
      for(var i=0;i<dataInfo.usercart.length;i++){
        this.foodData.push(dataInfo.usercart[i]);
      }
    }
  }
</script>
<style scoped>
  .gwc_top{
    width:320px;
    height:50px;
    line-height:50px;
    background:#3AC0B5;
    color:#fff;
    overflow:hidden;
    padding:0px 2%;
  }
  .icon_span{
    float:left;
    width:20%;
  }
  .icon_span a{
    color:#fff;
  }
  .gwc_title{
    font-size:16px;
    float:left;
    width:60%;
    margin-left:20%;
  }
  .gwc_bottom{
    width:320px;
    height:auto;
    margin-bottom:50px;
  }
  .gwc_Div{
    padding:10px 15px;
    width:100%;
    height:auto;
  }
  .gwc_list{
    margin:10px 0px;
    overflow:hidden;
  }
  .gwc_list_l{
    width:30%;
    float:left;
  }
  .gwc_list_l img{
    max-width:100%;
  }
  .gwc_list_r{
    width:65%;
    margin-left:5%;
    float:left;
  }
  .gwc_list_r>span{
    display:block;
    width:100%;
    height:auto;
  }
  .span_Name{
    font-size:14px;
    color:#000;
    line-height:2em;
  }
  .span_price{
    overflow:hidden;
    line-height:2em;
    width:100%;
  }
  .now_price{
    color:#ff9000;
    font-size:14px;
    font-weight:bold;
    float:left;
  }
  .menshi{
    color:#999;
    font-size:12px;
    font-weight:lighter;
    float:left;
    margin-left:15px;
  }
  .span_count{
    width:100%;
    height:auto;
    overflow:hidden;
    font-size:14px;
  }
  .num{
    font-size:14px;
    color:#000;
    display:inline-block;
    float:left;
  }
  .add{
    float:left;
    margin-left:30%;
    color:#fff;
    width:22px;
    height:22px;
    border:1px solid transparent;
    background:#3AC0B5;
    text-align:center;
    line-height:20px;
    border-radius:50%;
  }
  .sub{
    float:left;
    margin-left:10px;
    color:#fff;
    width:22px;
    height:22px;
    text-align:center;
    line-height:20px;
    border-radius:50%;
    border:1px solid transparent;
    background:#3AC0B5;
  }
  .gwc_fixed{
    position:fixed;
    bottom:0;
    left:0;
    width:320px;
    height:50px;
    line-height:50px;
    overflow:hidden;
    font-size:14px;
    z-index:1000;
  }
  .fixed_l{
    width:50%;
    height:50px;
    background:#000;
    opacity:0.4;
    color:#fff;
    float:left;
    text-align:center;
  }
  .fixed_r{
    width:50%;
    height:50px;
    background:#FF9000;
    color:#337ab7;
    float:left;
    text-align:center;
  }
</style>
