<template>
  <div class="multiple-choice-practice">
    <div>
      {{ content.question.content }}
    </div>
    <div v-for="choice in content.choices" :key="choice.id">
      {{ choice.key }}
      {{ choice.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultipleChoicePractice',
  props: {
    content: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>