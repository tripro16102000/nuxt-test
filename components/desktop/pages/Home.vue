<template>
  <div>
    Hello desktop
  </div>
</template>
<script>
  export default {
    props:{
      posts:{
        type: Array,
        default: () => []
      }
    },
    mounted() {
      console.log(this.posts)
    }
  }
</script>
