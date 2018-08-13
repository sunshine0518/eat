<template>
  <div class="login">
    <div class="login_top">
      <span class="span_back"><router-link :to="action"><i class="iconfont" v-html="icon1"></i></router-link></span>
      <span class="login_span">注册</span>
      <span class="menu_span"><i class="iconfont" v-html="icon2"></i></span>
    </div>
    <div class="login_bottom">
      <div class="input_div">
        <label>用户名:</label>
        <input type="text" placeholder="请输入用户名">
      </div>
      <div class="input_div">
        <label>密码:</label>
        <input type="text" placeholder="请输入密码">
      </div>
      <div class="input_div">
        <label>确认密码:</label>
        <input type="text" placeholder="请再输入密码">
      </div>
      <div class="input_div">
        <label>手机号:</label>
        <input type="text" placeholder="请输入手机号">
      </div>
      <div class="input_div">
        <label>邮箱:</label>
        <input type="text" placeholder="请输入邮箱">
      </div>
      <div class="btn_submit">
        <button class="btn_login">注册</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"login",
    data(){
      return {
          icon1:"&#xf0292;",
          action:"/",
          icon2:"&#xf0161;",
      }
    }
  }
</script>
<style scoped>
.login{
  width:320px;
  height:auto;
}
  .login_top{
    width:100%;
    padding:0px 2%;
    height:50px;
    background:#3AC0B5;
    overflow:hidden;
    line-height:50px;
  }
  .span_back{
    width:20%;
    float:left;
  }
.span_back a{
  color:#fff;
}
  .login_span{
    width:60%;
    float:left;
    font-size:14px;
    color:#fff;
    text-align:center;
  }
  .menu_span{
    width:20%;
    float:right;
    color:#fff;
    text-align:right;
  }
  .login_bottom{
    padding:15px 2% 10px 2%;
  }
  .input_div{
    width:100%;
    overflow:hidden;
    margin:10px 0px;
  }
.input_div label{
  width:25%;
  text-align:right;
  color:#3AC0B5;
  font-size:14px;
  float:left;
}
.input_div input{
  outline:none;
  border:1px solid #3AC0B5;
  border-radius:6px;
  width:60%;
  float:left;
  padding:4px 8px;
  font-size:14px;
}
.btn_submit{
  width:100%;
  text-align:center;
  margin-top:15px;
}
  .btn_login{
    width:70%;
    text-align:center;
    padding:4px 0px;
    font-size:14px;
    color:#3AC0B5;
    outline:none;
    border:1px solid #3AC0B5;
    background:none;
    border-radius:8px;
  }
</style>
