<template>
  <div class="allFood">
    <h4>{{name}}</h4>
    <div class="foodList">
      <div class="foodDiv" v-for="item in food">
        <div class="foodL">
          <router-link :to="action3"><img :src="item.img"></router-link>
        </div>
        <div class="foodR">
          <span class="foodNameSpan">{{item.foodName}}</span>
          <span class="foodDesSpan">{{item.foodDes}}</span>
          <span class="foodInfo"><span class="foodPriceSpan">{{item.foodPrice}}元</span><span class="foodSellSpan">已售{{item.foodSell}}份</span></span>
        </div>
      </div>
    </div>
    <div class="homeFoot">
      <span class="login"><router-link :to="action1">登录</router-link></span>
      <span class="registe"><router-link :to="action2">注册</router-link></span>
      <span class="backT">返回顶部</span>
    </div>
  </div>
</template>
<script>
  export default{
    name:"homeFood",
    data(){
      return {
            name:"最新推荐",
            food:[
              {foodName:"皮蛋瘦肉粥",foodDes:"美味单人餐，店内提供WIFI",foodPrice:"90",foodSell:"123450","img":"../../static/img/c12745ed8a5171e13b427dbc39401jpeg (1).jpeg"},
              {foodName:"皮蛋瘦肉粥",foodDes:"美味单人餐，店内提供WIFI",foodPrice:"90",foodSell:"123450","img":"../../static/img/c12745ed8a5171e13b427dbc39401jpeg.jpeg"},
              {foodName:"皮蛋瘦肉粥",foodDes:"美味单人餐，店内提供WIFI",foodPrice:"90",foodSell:"123450","img":"../../static/img/c12745ed8a5171e13b427dbc39401jpeg.jpeg"},
              {foodName:"皮蛋瘦肉粥",foodDes:"美味单人餐，店内提供WIFI",foodPrice:"90",foodSell:"123450","img":"../../static/img/c12745ed8a5171e13b427dbc39401jpeg.jpeg"},
              {foodName:"皮蛋瘦肉粥",foodDes:"美味单人餐，店内提供WIFI",foodPrice:"90",foodSell:"123450","img":"../../static/img/c12745ed8a5171e13b427dbc39401jpeg.jpeg"},
              {foodName:"皮蛋瘦肉粥",foodDes:"美味单人餐，店内提供WIFI",foodPrice:"90",foodSell:"123450","img":"../../static/img/c12745ed8a5171e13b427dbc39401jpeg.jpeg"},
            ],
        action1:"/login",
        action2:"/register",
        action3:"/sg",
      }
    }
  }
</script>
<style scoped>
  .allFood{
    width:100%;
    height:auto;
    padding:15px 2%;
    margin-bottom:60px;
  }
  .allFood h4{
    color:#000;
    font-size:16px;
    height:30px;
    line-height:30px;
  }
  .foodList{
    width:100%;
    height:auto;
    padding-bottom:15px;
  }
  .foodDiv{
    border-top:1px solid #ccc;
    padding:15px 0px;
    width:100%;
    height:auto;
    overflow:hidden;
  }
  .foodL{
    float:left;
    width:30%;
  }
  .foodL a{
    display:block;
    width:100%;
    height:100%;
  }
  .foodL img{
    width:80px;
    height:auto;
  }
  .foodR{
    float:left;
    width:65%;
    margin-left:5%;
  }
  .foodR>span{
    display:block;
  }
  .foodNameSpan{
    font-size:1em;
    line-height:2em;
    color:#000;
  }
  .foodDesSpan{
    font-size:12px;
    line-height:1.2em;
    color:#999;
  }
  .foodPriceSpan{
    font-size:1em;
    font-weight:bold;
    color:#3AC0B5;
    float:left;
  }
  .foodSellSpan{
    font-size:12px;
    color:#999;
    float:right;
  }
  .foodInfo{
    overflow:hidden;
    margin-top:1em;
  }
  .homeFoot{
    width:100%;
  }
  .login,.registe{
    display:inline-block;
    width:50px;
    height:30px;
    border:1px solid #3AC0B5;
    border-radius:4px;
    text-align:center;
    line-height:30px;
    font-size:14px;
  }
  .login a,.registe a{
    color:#3AC0B5;
  }
  .registe{
    margin-left:10px;
  }
  .backT{
    float:right;
    font-size:12px;
    color:#8b4b27;
  }
</style>
