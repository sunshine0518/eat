<template>
  <div class="footer">
    <ul class="ulMenu">
      <li @click="addClick(index)" class="bottomList" v-for="(item,index) in bottomMenu">
        <router-link  :class="{color:item.isColor}" :to="item.action">
          <i class="iconfont icon_i"  :class="{color:item.isColor}" v-html="item.icon"></i>
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    name:"foot",
    data(){
      return {
        bottomMenu:[
          {"name":"首页","action":"/","icon":"&#xf012b;","isColor":false,},
          {"name":"闪购","action":"./sg","icon":"&#xf0139;","isColor":false,},
          {"name":"购物车","action":"./gwc","icon":"&#xf0178;","isColor":false,},
          {"name":"我的","action":"./my","icon":"&#xf012d;","isColor":false,}
        ],
      }
    },
  methods:{
    addClick:function (index){
      for(var i=0;i<this.bottomMenu.length;i++){
        this.bottomMenu[i].isColor=false;
      }
      this.bottomMenu[index].isColor=true;
    }
  }
  }
</script>

<style scoped>
  .footer{
    position:fixed;
    bottom:0px;
    left:0px;
    width:320px;
    height:60px;
    background:#000;
    -moz-opacity: 0.4;
    opacity:0.4;
    z-index:1000;
  }
  .ulMenu{
    margin:0;
    padding:0;
    list-style:none;
    overflow:hidden;
    width:100%;
    height:60px;
    text-align:center;
  }
  .bottomList{
    float:left;
    width:25%;
    height:100%;
  }
  .icon_i{
    display:block;
    font-size:0.85em;
    margin-bottom:0.5em;
    color:#fff;
  }
  .bottomList a{
    text-decoration:none;
    font-size:0.85em;
    display:inline-block;
    width:100%;
    height:100%;
    color:#fff;
    margin-top:8px;
  }
  .color{
    color:#3AC0B5 !important;
  }
</style>
