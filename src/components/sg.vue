<template>
  <div>
    <div class="dianpu_header">
      <dianpuTitle :seller="seller"></dianpuTitle>
    </div>
    <div class="tab">
      <div class="tab_item">
        <router-link to="/dianpuMain">商品</router-link></div>
      <div class="tab_item">
        <router-link to="/pj">评价</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/sj">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import dianpuTitle from '@/components/dianpuTitle'
  import dianpuMain from '@/components/dianpuMain'
  export default{
    name:"sg",
    components:{
      dianpuTitle:dianpuTitle,
      dianpuMain:dianpuMain
    },
    created:function(){
      this.$http.get("static/data.json").then(function (res){
        this.seller=res.data.seller;
      });
    },
    data(){
      return{
        seller:''
      }
    }
  }
</script>
<style lang="less">
  @width:100%;
  @color:#999;
  @borderColor:#ccc;
  @height:40px;
  .tab{
    width:@width;
    height: @height;
    line-height:@height;
    display:flex;
    flex-direction: row;
    box-sizing: content-box;
    position:relative;
    .tab_item {
      flex: 1;
      text-align: center;
      a{
        color:@color;
        display:block;
        font-size: 12px;
      }
      a:hover,a:active{
        color:#000;
        text-decoration:none;
      }
    }
  }
  .tab:before{
    border-top:1px solid @borderColor;
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    content:"";
  }
  .tab:after{
    border-bottom:1px solid @borderColor;
    position:absolute;
    bottom:0px;
    left:0px;
    width:100%;
    content:"";
  }
</style>
