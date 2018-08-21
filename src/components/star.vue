<template>
  <div class="star">
    <span class="star_item" :class="itemClass" v-for="itemClass in itemClasses"></span>
  </div>
</template>
<script>
  const  LENGTH=5;
  const ON="on";
  const OFF="off";
  const HALF="half";
  export default{
    props:{
      score:{
        type:Number,
      }
    },
    computed:{
      itemClasses(){
        let result=[];
        let score=Math.floor(this.score*2)/2;
        let hasDecimal=score%1;
        let integer=Math.floor(score);
        for(var i=0;i<integer;i++){
          result.push(ON);
        }
        if(hasDecimal){
          result.push(HALF);
        }
        while(result.length< LENGTH){
          result.push(OFF);
        }
        return result;
      }
    },
  }
</script>
<style lang="less">
  .star{
    width:170px;
    height:30px;
    line-height:30px;
    margin:20px auto;
    .star_item{
      display:inline-block;
      background-repeat:no-repeat;
      width:20px;
      height:20px;
      margin:0px 6px;
    }
    .on{
      background:url("../../static/img/star24_on@2x.png");
    }
    .off{
      background:url("../../static/img/star24_off@2x.png");
    }
    .half{
      background:url("../../static/img/star24_half@2x.png");
    }
  }
</style>
