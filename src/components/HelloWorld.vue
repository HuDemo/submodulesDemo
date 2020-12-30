<template>
  <div class="container"></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  height: 100%;
  color: #000;
  background: #fff;
  font-size: 12px;
  line-height: 166.6%;
  text-align: center;
}
</style>
