<template>
  <div class="my_bottom">
    <ul class="myLists">
      <li class="ulList" v-for="item in bottomMenu">
        <i class="iconfont icon_i" v-html="item.icon"></i>
        <span class="li_span">{{item.name}}</span>
        <i class="iconfont pos_i" v-html="icon_arrow_right"></i>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name:"myBottom",
    data(){
        return {
          bottomMenu:[{name:"我的订单",icon:"&#xf00e1;",color:"#51BDBD;"},
                      {name:"我的资料",icon:"&#xf012d;",color:"#77C31F;"},
                      {name:"修改密码",icon:"&#xf00c9;",color:"#F69463;"},
                      {name:"优惠券",icon:"&#xf01f6;",color:"#F784A5;"},
                      {name:"收货地址",icon:"&#xf0295;",color:"#30B5D6;"},
                      {name:"退出",icon:"&#xf00b4;",color:"#405E90"}
            ],
          icon_arrow_right:"&#xf02af;",
        }
    }
  }
</script>
<style scoped>
  .my_bottom{
    width:100%;
    height:auto;
  }
  .myLists{
    margin:0;
    padding:0;
  }
  .ulList{
    list-style:none;
    line-height:40px;
    height:40px;
    width:100%;
    padding:0px 2%;
    border-top:1px solid #f0f0f0;;
    border-bottom:1px solid #f0f0f0;;
    overflow:hidden;
    margin:10px 0px;
    background:#fff;
    position:relative;
  }
  .pos_i{
    position:absolute;
    right:2%;
    top:0px;
    color:#ccc;
    font-size:14px;
  }
  .icon_i{
    display:inline-block;
    float:left;
    font-size:14px;
    margin-top:5px;
    width:30px;
    height:30px;
    line-height:30px;
    text-align:center;
    color:#fff;
    background:#3AC0B5;
  }
  .li_span{
    font-size:14px;
    float:left;
    margin-left:5px;
    color:rgba(0,0,0,.6);
  }
  .color1{
color:#51BDBD;
}
.color2{
color:#77C31F;
}
.color3{
color:#F69463;
}
.color4{
color:#F784A5;
}
.color5{
color:#30B5D6;
}
.color6{
color:#405E90;
}
</style>
