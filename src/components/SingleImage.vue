<template>
  <div class="single-image">
      <p class="content is-large">图片{{ pageIdx-1 }}</p>
      <img :src="content.url" />
  </div>
</template>

<script>
export default {
  name: 'SingleImage',
  props: {
    pageIdx: Number,
    content: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.single-image {
  height: 100%;
  text-align: center;
}
.content {
  margin-bottom: 2vh; 
}
img {
  max-width: 100%;
  max-height: 80vh;
  width: auto;
  height: auto;
}
</style>