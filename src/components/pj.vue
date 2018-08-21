<template>
  <div>
    <div class="div_score">
      <div class="div_score_l">
        <p class="score_p">{{allData.score}}</p>
        <p class="zonghe_p">综合评分</p>
        <p class="rankRate_p">高于周边商家{{allData.rankRate}}%</p>
      </div>
      <div class="div_score_r">
        <p>食物评分:<span>{{allData.foodScore}}</span></p>
        <p>服务评分:<span>{{allData.serviceScore}}</span></p>
        <p>送达时间:<span>{{allData.deliveryTime}}分钟</span></p>
      </div>
    </div>
    <div class="div_pj">
      <div class="pj_list" v-for="item in allPj">
        <div class="pj_list_t">
          <div class="pj_user_img"><img :src="imgSrc"></div>
          <div class="pj_info">
            <span class="pj_user">{{item.username}}</span>
            <span class="pj_time">{{item.rateTime |showtime(item.rateTime)}}</span>
          </div>
        </div>
        <div class="pj_list_b">
          <div class="pj_con"><p> {{item.text}}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:"pj",
    data(){
      return {
        allData:'',
        allPj:'',
        imgSrc:"static/img/refreshing_image_01.png",
      }
    },
    created:function (){
      this.$http.get("static/data.json").then(function (res){
        this.allData=res.data.seller;
        this.allPj=res.data.ratings;
      });
    },
    filters:{
      //局部注册过滤器
      showtime:function (value){
        //时间转化
        var time=new Date(value).toLocaleString();
        return time;
      }
    },
  }
</script>
<style lang="less">
  .div_score{
    width:100%;
    height:auto;
    display:flex;
    flex-direction: row;
    border-bottom:1px solid #ccc;
    padding:5px 0px;
    .div_score_l{
      flex:2;
      .score_p{
        font-size:20px;
        color:#FE9900;
        width:100%;
        margin:10px auto;
        text-align:center;
      }
      .zonghe_p{
        width:100%;
        text-align:center;
        font-size:14px;
        color:#000;
        font-weight:bold;
        margin-bottom:10px;
      }
      .rankRate_p{
        font-size:14px;
        color:#000;
        text-align:center;
      }
    }
    .div_score_r{
      flex:3;
      border-left:1px solid #ccc;
      padding-left:6px;
      p{
        line-height:35px;
        color:#000;
        font-size:14px;
      }
    }
  }
  .div_pj{
    margin-top:15px;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    padding:5px 2%;
    .pj_list{
      width:100%;
      margin:10px auto;
      .pj_list_t{
        overflow:hidden;
        .pj_user_img{
          width:20%;
          float:left;
          img{
            max-width:100%;
          }
        }
        .pj_info{
          width:80%;
          float:left;
          font-size:12px;
          .pj_user{
            float:left;
          }
          .pj_time{
            float:right;
          }
        }
      }
      .pj_list_b{
        margin-top:20px;
        .pj_con{
          p{
            font-size:12px;
            line-height:20px;
          }
        }
      }
    }
  }
</style>
