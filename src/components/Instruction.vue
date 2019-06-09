<template>
  <div class="instruction">
      <p v-for="sentence in content.sentences" :key="sentence">
          {{ sentence }}
      </p>
  </div>
</template>

<script>
export default {
  name: 'Instruction',
  props: {
    content: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>