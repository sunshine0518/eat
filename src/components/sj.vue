<template>
  <div class="block">
    <div class="top">
      <h1 class="sj_name">{{allData.name}}<span>月售{{allData.ratingCount}}单</span></h1>
      <star :score="allData.score"></star>
    </div>
    <div class="middle">
      <div class="middle_list">
        <p>起送价</p>
        <span>{{allData.minPrice}}元</span>
      </div>
      <div class="middle_list">
        <p>商家配送</p>
        <span>{{allData.deliveryPrice}}元</span>
      </div>
      <div class="middle_list">
        <p>平均配送时间</p>
        <span>{{allData.deliveryTime}}元</span>
      </div>
    </div>
    <div class="div_bulletin">
      <h1>公告与活动</h1>
      <p class="bulletin_p">{{allData.bulletin}}</p>
      <ul class="ul_list">
        <li v-for="item in allData.supports" class="itemLi">{{item.description}}</li>
      </ul>
    </div>
    <div class="div_sj_pic">
      <h1>商家实景</h1>
      <div class="div_sj">
        <div class="div_sjImg" v-for="item in allData.pics">
          <img :src="item">
        </div>
      </div>
    </div>
    <div class="div_sj_info">
      <h1>商家信息</h1>
      <ul>
        <li v-for="item in allData.infos">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import star from "@/components/star";
  export default{
    name:"sj",
    components:{
      star:star,
    },
    data(){
      return {
        allData:''
      }
    },
    created:function (){
      this.$http.get("static/data.json").then(function (res){
        this.allData=res.data.seller;
      });
    }
  }
</script>
<style lang="less">
  .block{
    background:#F4F5F7;
  }
  .top{
    width:100%;
    height:auto;
    padding:10px 2%;
    background:#fff;
    .sj_name{
      font-size:14px;
      color:#000;
      text-align:center;
    }
  }
  .middle{
    background:#fff;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    display:flex;
    flex-direction: row;
    padding:10px 0;
    .middle_list{
      flex:1;
      border-right:1px solid #ccc;
      text-align:center;
      p{
        font-size:16px;
        color:#999;
      }
      span{
        font-size:14px;
        color:#000;
      }
    }
    & .middle_list:last-child{
      border:none;
    }
  }
  .div_bulletin{
    background:#fff;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    margin:20px auto;
    padding:10px 2%;
    h1{
      font-size:16px;
      color:#000;
      font-weight:bold;
    }
    .bulletin_p{
      font-size:12px;
      text-indent: 24px;
      line-height:24px;
      color:#FB1015;
    }
    .ul_list{
      padding:0;
      margin-top:20px;
      .itemLi{
        border-top:1px solid #ccc;
        padding:10px 0px;
        font-size:12px;
      }
      & li:last-child{
        border-bottom:1px solid #ccc;
      }
    }
  }
  .div_sj_pic{
    background:#fff;
    margin:20px auto;
    padding:10px 2%;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    h1{
      font-size:16px;
      font-weight:bold;
    }
    .div_sj{
      width:100%;
      display:flex;
      flex-direction: row;
      .div_sjImg{
        flex:1;
        padding:10px;
        img{
          max-width:100%;
        }
      }
    }
  }
  .div_sj_info{
    background:#fff;
    padding:10px 2%;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    h1{
      font-size:16px;
      font-weight:bold;
    }
    ul{
      padding:0;
      margin-top:15px;
      li{
        padding:5px 0px;
        border-top:1px solid #ccc;
        font-size:12px;
      }
      & li:last-child{
        border-bottom:1px solid #ccc;
      }
    }
  }
</style>
