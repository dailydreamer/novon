<template>
  <div class="instruction">
    <div>
      <p v-for="sentence in content.sentences" :key="sentence" class="content is-large">
          {{ sentence }}
      </p>
    </div>
  </div>
</template>

<script>
import {nextPageMixin} from '../mixins'

export default {
  name: 'Instruction',
  mixins: [nextPageMixin],
  props: {
    content: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.instruction {
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
p {
  line-height:200%;
}
</style>