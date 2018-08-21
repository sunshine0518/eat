<template>
  <div class="dianpuTitle">
    <span class="span_icon"><router-link :to="action"><i class="iconfont icon_back" v-html="iconBack"></i></router-link></span>
    <div class="dianpu_t">
      <div class="dianpu_img">
        <img width="70" height="70" :src="seller.avatar">
      </div>
      <div class="dianpu_info">
        <p class="dianpu_name">{{seller.name}}</p>
        <p class="dianpu_des">{{seller.description}}/大约{{seller.deliveryTime}}分钟送达</p>
        <div class="favor" v-if="seller.supports">
          <span class="icon_span" :class="classMap[seller.supports[0].type]"></span>
          <span>{{seller.supports[0].description}}</span>
          <span class="favor_num" @click="showDetail()">{{seller.supports.length}}个活动<i class="iconfont"></i></span>
        </div>
      </div>
      <div class="dianpu_detail" v-show="dianpuDetail">
        <div class="detail_wrapper clearfix">
          <div class="detail_main">
            <h1 class="detail_main_name">{{seller.name}}</h1>
            <star :score="seller.score"></star>
            <div class="detail_favor">
              <span class="line_span"></span>
              <span class="text_span">优惠信息</span>
              <span class="line_span"></span>
              <ul class="favor_nav">
                <li v-for="(item,index) in seller.supports">
                  <i class="icon_span" :class="classMap[seller.supports[index].type]"></i>
                  {{item.description}}
                </li>
              </ul>
            </div>
            <div class="detail_bulletin">
              <span class="line_span"></span>
              <span class="text_span">商家公告</span>
              <span class="line_span"></span>
              <p class="detail_bulletin_p">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail_close">
          <i @click="hiddenDetail()" class="iconfont icon_close" v-html="iconClose"></i>
        </div>
      </div>
    </div>
    <div class="dianpu_b">
      <div class="bulletin_con" @click="showDetail()">
        <span class="bulletin_span">公告</span>
        <span>{{seller.bulletin | suojian(seller.bulletin)}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import star from "@/components/star";
  export default{
    props:{
      seller:{
        type:Object,
      }
    },
    components:{
      star:star,
    },
    name:"dianpuTitle",
    filters:{
      "suojian":function (value){
        if(value==undefined) return;
        if(value.length>40){
          value=value.substr(0,22)+"...";
        }
        return value;
      }
    },
    created:function (){
      this.classMap=["decrease","discount","discount","invoice","guarantee"];
    },
    data(){
      return{
        classMap:[],
        dianpuDetail:false,
        iconClose:"&#xf00b3;",
        iconBack:"&#xf0292;",
        action:"/"
      }
    },
    methods:{
      showDetail:function (){
        this.dianpuDetail=true;
      },
      hiddenDetail:function (){
        this.dianpuDetail=false;
      }
    }
  }
</script>
<style lang="less">
  @headerBg:#3AC0B5;
  @color:#fff;
  p{
    margin:0;
  }
  .clearfix{
    display:inline-block;
  }
  .clearfix:after{
    display:block;
    content:".";
    height:0;
    line-height:0;
    clear:both;
    visibility: hidden;
  }
  .dianpuTitle{
    background:@headerBg;
    color:@color;
  }
  .span_icon{
    display:block;
    a{
      color:#fff;
      margin-left:1%;
    }
  }
  .dianpu_t{
    display:flex;
    flex-direction: row;
    padding:0px 2%;
  }
  .dianpu_img{
    flex:2;
  }
  .dianpu_info{
    flex:5;
    .dianpu_name{
      font-size:14px;
      height:26px;
      line-height:26px;
    }
    .dianpu_des{
      font-size:12px;
      height:24px;
      line-height:24px;
    }
    .favor{
      font-size:12px;
      height:24px;
      line-height:24px;
      vertical-align:top;
      .icon_span{
        width:12px;
        height:12px;
        display:inline-block;
        background-size:12px 12px;
        background-repeat:no-repeat;
      }
      .decrease{
        background-image:url('../../static/img/decrease_1@2x.png');
      }
      .discount{
        background-image:url('../../static/img/discount_1@2x.png');
      }
      .invoice{
        background-image:url('../../static/img/invoice_1@2x.png');
      }
      .guarantee{
        background-image:url('../../static/img/guarantee_1@2x.png');
      }
      .favor_num{
        float:right;
        margin-right:10%;
      }
    }
  }
  .dianpu_detail{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:1100;
    /*background:rgba(7,17,27,.9);*/
    background:rgba(0,0,0,.9);
    .detail_wrapper{
      min-height:100%;
      width:100%;
      .detail_main{
        margin-top:64px;
        padding-bottom:64px;
        width:100%;
        .detail_main_name{
          font-size:16px;
          width:100%;
          text-align:center;
        }
        .detail_favor,.detail_bulletin{
          margin:10px auto;
          overflow:hidden;
          padding:0px 10%;
          .span{
            float:left;
          }
          .line_span{
            display:inline-block;
            width:35%;
            height:2px;
            background:#636770;
            position:relative;
            top:-4px;
          }
          .text_span{
            font-size:16px;
            color:#fff;
          }
          .favor_nav{
            list-style:none;
            padding:0;
            margin:0;
            li{
              margin:5px 0px;
              font-size:12px;
              color:#fff;
              i{
                display:inline-block;
                width:16px;
                height:16px;
                background-size:cover;
                position:relative;
                top:2px;
              }
              .decrease{
                background-image:url('../../static/img/decrease_1@2x.png');
              }
              .discount{
                background-image:url('../../static/img/discount_1@2x.png');
              }
              .invoice{
                background-image:url('../../static/img/invoice_1@2x.png');
              }
              .guarantee{
                background-image:url('../../static/img/guarantee_1@2x.png');
              }
            }
          }
          .detail_bulletin_p{
            color:#fff;
            font-size:12px;
            line-height:30px;
          }
        }
      }
    }
    .detail_close{
      position:relative;
      width:32px;
      height:32px;
      margin:-64px auto 0px auto;
      text-align:center;
      line-height:32px;
      clear:both;
      .icon_close{
        width:100%;
        height:100%;
        font-size:14px;
        font-weight:lighter;
        display:block;
      }
    }
  }
  .dianpu_b{
    width:100%;
    padding:10px 2%;
    font-size:12px;
    background:rgba(0,0,0,.4);
  }
</style>
