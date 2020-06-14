<template>
  <div class="multiple-choice">
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
import {nextPageMixin, recordTimeMixin, makeChoiceMixin, addRecordMixin} from '../mixins'

export default {
  name: 'MultipleChoice',
  mixins: [nextPageMixin, recordTimeMixin, makeChoiceMixin, addRecordMixin],
  props: {
    content: Object
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>