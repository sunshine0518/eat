<template>
  <div class="login">
    <div class="login_top">
      <span class="span_back"><router-link :to="action"><i class="iconfont" v-html="icon2"></i></router-link></span>
      <span class="register_span">登录</span>
      <span class="menu_span"><i class="iconfont" v-html="icon1"></i></span>
    </div>
    <div class="login_bottom">
      <input type="text" placeholder="请输入用户名" />
      <input type="text" placeholder="请输入密码" />
      <input type="button" value="登录" id="login"/>
      <div class="op">
        <span class="forget">忘记密码</span>
        <span class="goRes"><router-link :to="actionR">立即注册</router-link></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"register",
    data(){
      return {
          action:'/',
          icon1:"&#xf0161;",
          icon2:"&#xf0292;",
          actionR:"/register"
      }
    }
  }
</script>
<style lang="less">
  .login_top{
    height:50px;
    width:320px;
    background:#3AC0B5;
    color:#fff;
    line-height:50px;
    overflow:hidden;
    padding:0px 2%;
  }
  .login_top span{
    display:inline-block;
    height:100%;
    line-height:100%;
  }
  .span_back{
    float:left;
    width:20%;
    padding-top:15px;
  }
  .span_back a{
    color:#fff;
  }
  .register_span{
    width:42%;
    margin-left:18%;
  }
  .menu_span{
    width:20%;
    float:right;
    text-align:right;
    color:#fff;
    padding-top:15px;
  }
  .login_bottom{
    margin-top:10px;
  }
  .login_bottom input{
    outline:none;
    border:1px solid #3AC0B5;
    display:block;
    padding:6px 10px;
    font-size:14px;
    width:70%;
    margin:15px auto;
    border-radius:10px;
  }
  #login{
    background:none;
    font-size:14px;
    color:#3AC0B5;
  }
  .op{
    overflow:hidden;
    width:70%;
    margin:20px auto;
  }
  .forget{
    font-size:12px;
    color:#3AC0B5;
    float:left;
  }
  .goRes{
    font-size:12px;
    color:#3AC0B5;
    float:right;
    a{
      color:#3AC0B5;
    }
  }
</style>
