<template>
  <div>
    <div class="dianpu_top">
      <dianpuTitle></dianpuTitle>
    </div>
    <div class="dianpu_main">
      <dianpuMain></dianpuMain>
    </div>
  </div>
</template>
<script>
  import dianpuTitle from "@/components/dianpuTitle";
  import dianpuMain from "@/components/dianpuMain";
  export default {
    name:"dianpu",
    components:{
      dianpuTitle:dianpuTitle,
      dianpuMain:dianpuMain,
    },
    data(){
      return {

      }
    }
  }
</script>
