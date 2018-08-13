<template>
  <div>
    <div class="dianpu">
      <span class="icon_back"><router-link :to="action"><i class="iconfont" v-html="icon"></i></router-link></span>
      <div class="dianpu_img">
        <img class="dianpu_image" :src=dianpuData.avatar />
      </div>
      <div class="dianpu_info">
        <h4 class="dianpu_name">{{dianpuData.name}}</h4>
        <p class="dianpu_des">{{dianpuData.bulletin | suojian(dianpuData.bulletin)}}</p>
        <p class="dianpu_yunsong">{{dianpuData.description }}</p>
      </div>
    </div>
    <div class="favor">
      <ul class="favor_menu">
        <li class="favor_list" v-for="item in dianpuData.supports">{{item.description}}</li>
        <span class="favor_num">{{favorLength}}个活动<i class="iconfont icon_down">&#xf02a9;</i></span>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name:"dianpuTitle",
    filters:{
      suojian:function (value){
        if(value==undefined)return;
        if(value.length>30)
        {
          return value.substr(0,30)+"...";
        }
        return value;
      }
    },
    data(){
      return {
        dianpuData:"",
        favorLength:0,
        icon:"&#xf0292;",
        action:"/"
      }
    },
    created:function (){
      this.$http.get("static/data.json").then(function (res){
        this.dianpuData=res.data.seller;
        this.favorLength=res.data.seller.supports.length;
        console.log(this.dianpuData);
      });
    },
    computed:{

    },
    methods:{
    }
  }
</script>

<style scoped>
  .dianpu{
    width:100%;
    height:auto;
    padding:30px 0 5px 0;
    background:#3AC0B5;
    display:flex;
    flex-direction: row;
  }
  .icon_back{
    position:absolute;
    top:8px;
    left:10px;
    width:14px;
    height:14px;
  }
  .icon_back a{
    color:#fff;
  }
  .dianpu_img{
    flex:1;
    padding-left:5px;
  }
  .dianpu_image{
    width:80px;
    height:80px;
  }
  .dianpu_info{
    flex:4;
    margin-left:15px;
    padding-right:5px;
  }
  .dianpu_name{
    color:#fff;
    font-weight:lighter;
    font-size:14px;
  }
  .dianpu_des{
    font-size:12px;
    color:#fff;
    margin-top:5px;

  }
  .dianpu_yunsong{
    font-size:12px;
    color:#fff;
    margin-top:3px;
  }
  .favor{
    width:100%;
    height:40px;
    overflow:hidden;
    padding-left:2%;
    background:#fff;
    color:#000;
    font-size:12px;
  }
  .favor_menu{
    padding:0;
    margin:0;
    position:relative;
  }
  .favor_list{
    height:40px;
    line-height:40px;
  }
  .favor_num{
    position:absolute;
    top:0px;
    width:65px;
    height:40px;
    line-height:40px;
    color:#999;
    right:2%;
  }
  .icon_down{
    margin-left:5px;
  }
</style>

