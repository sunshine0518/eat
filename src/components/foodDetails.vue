<template>
  <div>
    <div class="details_top">
      <span class="icon_span"><router-link :to="action"><i class="iconfont" v-html="icon1"></i></router-link></span>
      <span class="proName">{{proName}}</span>
      <span class="menu_span"><i class="iconfont" v-html="icon2"></i></span>
    </div>
    <div class="details_img">
      <img :src="oneInfo.image" class="bigImg">
      <span class="foodName">{{oneInfo.name}}</span>
      <div class="add_cart">
           <span class="nowPrice">{{oneInfo.price}}<span class="smallSize">元</span></span>
          <span class="cart_span">加入购物车</span>
      </div>
    </div>
    <div class="pingjia">
      <h4>{{title}}</h4>
      <div class="pingjiaLists" v-for="rats in oneInfo.ratings">
        <div class="pjLists_t">
          <div class="userInfo">
            <img :src="userImg" class="userImage">
            <span class="userName">{{rats.username}}</span>
          </div>
          <div class="timeDiv">
            <span class="timeSpan">{{rats.rateTime | showtime}}</span>
          </div>
        </div>
        <div class="pjLists_b">
          <p>{{rats.text}}</p>
        </div>
      </div>
      <span class="showAll">{{text}}</span>
    </div>
    <div class="moreInfo">
      <span class="moreSpan">{{text1}}</span>
      <p class="des_p">{{oneInfo.info}}</p>
    </div>
    <div class="bigImg">
      <img :src="oneInfo.image" class="bigImg">
    </div>
  </div>
</template>
<script>
  export default{
    name:"foodDetails",
    data(){
      return {
        proName:"客多多",
        icon1:"&#xf0292;",
        icon2:"&#xf0161;",
        indexP:0,
        indexC:0,
        detailInfo:null,
        oneInfo:"",
        title:"宝贝评价",
        userImg:"../../static/img/refreshing_image_01.png",
        text:"查看所有评价",
        text1:"关于宝贝更多",
        action:"/sg"
      }
    },
    filters:{
      //局部注册过滤器
      showtime:function (value){
        //时间转化
        var time=new Date(value).toLocaleString();
        return time;
      }
    },
    created:function (){
      this.indexP=this.$route.params.indexp;
      this.indexC=this.$route.params.indexc;
      this.$http.get("static/data.json").then((res)=>{
          console.log(res.data.goods);
          this.detailInfo=res.data.goods;
          this.oneInfo=this.detailInfo[this.indexP].foods[this.indexC];

        }
      )
    }
  }
</script>
<style scoped>
  p{
    margin:0;
  }
  .details_top{
    width:320px;
    height:50px;
    overflow:hidden;
    padding:0px 15px;
    background:#3AC0B5;
    color:#fff;
    line-height:50px;
  }
  .details_top span{
    display:inline-block;
    height:100%;
  }
  .icon_span{
    width:20%;
    float:left;
  }
  .icon_span a{
    color:#fff;
  }
  .proName{
    width:60%;
    padding-left:18%;
    float:left;
  }
  .menu_span{
    width:20%;
    float:right;
    text-align:right;
  }
  .details_img{
    width:100%;
    height:260px;
    position:relative;
  }
  .bigImg{
    width:320px;
    height:260px;
  }
  .foodName{
    color:#fff;
    position:absolute;
    bottom:10px;
    left:15px;
    font-size:14px;
  }
  .add_cart{
    width:100%;
    height:51px;
    padding:10px 15px;
    overflow:hidden;
  }
  .nowPrice{
    float:left;
    display:inline-block;
    color:#3AC0B5;
    font-size:1.2em;
    font-weight:bold;

  }
  .smallSize{
    color:#999;
    font-size:12px;
  }
  .cart_span{
    display:inline-block;
    padding:4px 8px;
    background:#FF9900;
    border-radius:6px;
    border:1px solid transparent;
    color:#fff;
    font-size:14px;
    float:right;
  }
  .pingjia{
    margin-top:40px;
    padding:20px 15px;
  }
  .pingjia h4{
    font-size:14px;
    font-weight:lighter;
    color:#000;
    margin-bottom:20px;
  }
  .pingjiaLists{
    margin:10px 0px;
    padding-bottom:5px;
    padding-top:15px;
    border-top:1px solid #ccc;
  }
  .pjLists_t{
    width:100%;
    height:auto;
    overflow:hidden;
    margin-bottom:10px;
  }
  .userInfo{
    width:40%;
    float:left;
  }
  .userImage{
    width:50px;
    height:auto;
    float:left;
  }
  .userName{
    float:left;
    margin-left:5px;
    font-size:12px;
    color:#000;
  }
  .timeDiv{
    float:right;
    width:55%;
  }
  .timeSpan{
    font-size:12px;
    color:#999;
  }
  .pjLists_b p{
    font-size:12px;
    color:#000;
    line-height:20px;
  }
  .showAll{
    display:block;
    padding:15px 0px;
    font-size:14px;
    color:#3AC0B5;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
  }
  .moreInfo{
    padding:10px 15px 5px 15px;
  }
  .moreSpan{
    font-size:14px;
    color:#3AC0B5;
    font-weight:bold;
  }
  .des_p{
    font-size:13px;
    line-height:25px;
    text-indent:24px;
    color:#000;
    margin:15px 0px;
  }
  .bigImg{
    width:320px;
    height:260px;
  }
</style>
