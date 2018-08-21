<template>
  <div>
    <div id="dianpuFood">
      <div class="dianpu_main_l" ref="menuWrapper">
        <ul class="dianpu_foods_menu">
          <li class="dianpu_foods_list" v-for="(item,index) in dianpuData" @click="selectMenu(index)">
          {{item.name}}
          </li>
       </ul>
    </div>
      <div class="dianpu_main_r" ref="foodsWrapper">
      <ul class="dianpu_main_foods">
        <li class="dianpu_main_foods_list" v-for="(foodList,indexP) in dianpuData">
          <span class="dianpu_main_foods_list_name">{{foodList.name}}</span>
          <ul class="dianpu_main_foods_child">
            <li class="dianpu_main_foods_childList food-list-hook" v-for="(food,indexC) in foodList.foods">
              <div class="dianpu_main_food_div">
                <div class="dianpu_main_food_div_l">
                  <router-link :to="{name:'foodDetails',params:{indexp:indexP,indexc:indexC}}"><img class="food_img" :src=food.icon></router-link>
                </div>
                <div class="dianpu_main_food_div_r">
                  <p class="dianpu_main_food_name">{{food.name}}</p>
                  <p class="dianpu_main-food_des">{{food.info | suojian(food.info) }}</p>
                  <p class="dianpu_main-food_sell"><span>月售{{food.sellCount}}</span></p>
                  <p class="dianpu_main_buy">
                    <span class="dianpu_main_food_price">￥{{food.price}}</span>
                    <span class="sub_cart" @click="subNum(indexP,indexC)"><span v-show="allData[indexP].content[indexC].btnShow">-</span></span>
                    <span class="cart_num"><span v-show="allData[indexP].content[indexC].btnShow">{{allData[indexP].content[indexC].number}}</span></span>
                    <span class="add_cart" @click="addNum(indexP,indexC)"><span>+</span></span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    </div>
    <div class="dianpu_main_foot">
      <div class="dianpu_main_foot_l">
        <span class="icon_span"><i class="iconfont" v-html="icon"></i></span>
        <span class="peisong_span">另需配送费{{peisong}}元</span>
      </div>
      <div class="dianpu_main_foot_r">
        <span><router-link :to="action">总计:{{allprice}}元</router-link></span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import bScroll from "better-scroll";
  import dataInfo from '@/components/dataInfo'
  export default{
    name:"dianpuMain",
    created:function(){
      this.$http.get("static/data.json").then(function (res){
        this.dianpuData=res.data.goods;
        for(var i=0;i<this.dianpuData.length;i++){
          dataInfo.data.push({
            id:i,
            content:[]
          });
          for(var j=0;j<this.dianpuData[i].foods.length;j++){
            dataInfo.data[i].content.push({
              name:this.dianpuData[i].foods[j].name,
              price:this.dianpuData[i].foods[j].price,
              icon:this.dianpuData[i].foods[j].icon,
              btnshow:false,
              number:0,
            });
          }
        }
        this.allData=dataInfo.data;
      });
      this.$nextTick(function (){
        //发生更新后要执行的事件
        this._initScroll()
      });
    },
    data(){
      return {
        dianpuData:[],
        icon:"&#xf0148;",
        allData:"",
        allprice:0,
        peisong:5,
        action:"/gwc"
      }
    },
    filters:{
      suojian:function (value){
        if(value==undefined){
          return ;
        }
        if(value.length>8){
          value=value.substr(0,8)+"...";
        }
        return value;
      }
    },
    methods:{
      selectMenu:function (index){
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        let el = foodList[index]
        this.foodsScroll.scrollToElement(el,300)
      },
      _initScroll:function (){
        this.meunScroll = new bScroll(this.$refs.menuWrapper, {
          click:true
        })
        this.foodsScroll = new bScroll(this.$refs.foodsWrapper, {
          click:true
        })
      },
      addNum:function (indexP,indexC){
          this.allData[indexP].content[indexC].btnShow=true;
          this.allData[indexP].content[indexC].number++;
          this.saveCart(this.allData[indexP].content[indexC]);
          this.totalPrice();
      },
      subNum:function (indexP,indexC){
        this.allData[indexP].content[indexC].number--;
        if(this.allData[indexP].content[indexC].number<1){
          this.allData[indexP].content[indexC].number=0;
          this.allData[indexP].content[indexC].btnShow=false;
        }
        this.saveCart(this.allData[indexP].content[indexC]);
        this.totalPrice();
      },
      saveCart:function (obj){
        for(var i=0;i<dataInfo.usercart.length;i++){
              if(dataInfo.usercart[i].name==obj.name){
                dataInfo.usercart[i].number=obj.number;
                if(dataInfo.usercart.number<=0){
                  dataInfo.usercart.splice(i,1);
                }
                return ;
              }
        }
        dataInfo.usercart.push(obj);
      },
      totalPrice:function (){
        dataInfo.totalPrice=0;
        for(var i=0;i<dataInfo.usercart.length;i++){
          dataInfo.totalPrice+=dataInfo.usercart[i].number*dataInfo.usercart[i].price;
        }
        this.allprice=dataInfo.totalPrice;
      }
    }
  }
</script>
<style scoped>
  p{
    margin:0;
  }
  #dianpuFood{
    display:flex;
    flex-direction:row;
    width:100%;
    margin-bottom:40px;
    overflow:hidden;
  }
  .dianpu_main_l{
    flex:2;
    height:100%;
    background:#EBEBEB;
  }
  .dianpu_main_r{
    flex:5;
    height:350px;
    display:flex;
    flex-direction:column;
  }
  .dianpu_foods_menu{
    margin:0;
    width:100%;
    padding:0px;
  }
  .dianpu_foods_list{
    height: 27.6px;
    font-size:12px;
    width:100%;
    text-align:center;
    margin:10px 0px;
  }
  .dianpu_main_foods_list_name{
    display:block;
    padding:5px 10px;
    font-size:12px;
    color:#000;
  }
  .dianpu_main_food_div{
    display:flex;
    flex-direction:row;
    padding:10px 15px;
  }
  .dianpu_main_food_div_l{
    flex:1;
  }
  .food_img{
    width:70px;
    height:70px;
  }
  .dianpu_main_food_div_r{
    flex:5;
    margin-left:10px;
  }
  .dianpu_main_food_name{
    color:#000;
    font-size:14px;
  }
  .dianpu_main_foods{
    list-style:none;
    padding:0;
    margin:15px 0px;
  }
  .dianpu_main_foods_child{
    list-style:none;
    margin:0;
    padding:0;
  }
  .dianpu_main-food_des{
    font-size:12px;
    color:#CCCCCC;
    line-height:20px;
    height:20px;
  }
  .dianpu_main-food_sell{
    font-size:12px;
    color:#ccc;
    line-height:20px;
    height:20px;
  }
  .dianpu_main_food_price{
    width:34%;
    margin-right:6%;
    text-align:center;
    color:#3AC0B5;
    font-size:12px;
    font-weight:bold;
    float:left;
  }
  .dianpu_main_buy{
    overflow:hidden;
    width:100%;
    height:auto;
  }
  .dianpu_main_buy>span{
    float:left;
    padding:5px 0px;
    font-size:12px;
    display:inline-block;
  }
  .dianpu_main_buy>span>span{
    width:16px;
    height:16px;
    line-height:16px;
    text-align:center;
    display:block;
  }
  .dianpu_main_buy>span>span:nth-child(2){
  }
  .sub_cart>span{
    background:#fff;
    color:#ccc;
    border-radius:50%;
    border:1px solid #ccc;
  }
  .sub_cart,.add_cart,.cart_num{
    width:20%;
    height:20px;
    float:left;
  }
  .add_cart>span{
    border-radius:50%;
    background:#3AC0B5;
    color:#000;
    border:1px solid transparent;
  }
  .dianpu_main_foot{
    height:40px;
    line-height:40px;
    width:100%;
    position:fixed;
    bottom:0;
    left:0;
    z-index:1000;
    overflow:hidden;
  }
  .dianpu_main_foot_l{
    width:60%;
    float:left;
    text-align:center;
    opacity:0.4;
    background:#000;
    color:#999;
    font-size:12px;
  }
  .dianpu_main_foot_r{
    width:40%;
    float:left;
    background:#FF9900;
    color:#fff;
    height:40px;
    line-height:40px;
    font-size:14px;
    opacity:1;
  }
  .dianpu_main_foot_r a{
    color:#fff;
  }
  .icon_span{
    display:inline-block;
    width:30px;
    height:30px;
    border-radius:50%;
    border:1px solid #000;
    background:#000;
    text-align:center;
    line-height:30px;
  }
</style>
