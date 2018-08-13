<template>
  <div>
    <div class="my_top">
      <myTop></myTop>
    </div>
    <div class="my_bottom">
      <myBottom></myBottom>
    </div>
  </div>
</template>
<script>
  import myTop from '@/components/myTop'
  import myBottom from '@/components/myBottom'
  export default{
    name:"my",
    components:{
      myTop:myTop,
      myBottom:myBottom
    }
  }
</script>
