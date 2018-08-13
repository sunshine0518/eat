<template>
  <div>
      <div>
        <homeHeader></homeHeader>
        <homeFood></homeFood>
      </div>
      <foot></foot>
  </div>
</template>
<script>
  import foot from "@/components/foot"
  import homeHeader from "@/components/homeHeader"
  import homeFood from "@/components/homeFood"
  export default{
    name:"sy",
    components:{
      foot:foot,
      homeHeader:homeHeader,
      homeFood:homeFood
    }
  }
</script>

