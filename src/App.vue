<template>
  <div id="app" class="section">
    <component
      :is="currentPage.type"
      :pageIdx="pageIdx"
      :timeout="currentPage.timeout"
      :content="currentPage.content">
    </component>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Instruction from './components/Instruction.vue'
import MultipleChoice from './components/MultipleChoice.vue'
import MultipleChoicePractice from './components/MultipleChoicePractice.vue'
import SingleImage from './components/SingleImage.vue'

export default {
  name: 'app',
  data: function() {
    return {

    }
  },
  computed: {
    currentPage: function(){
      return this.pages[this.pageIdx];
    },
    ...mapState([
      'pages',
      'pageIdx'
    ]),
  },
  components: {
    Instruction,
    MultipleChoice,
    MultipleChoicePractice,
    SingleImage,
  },
  methods: {
    ...mapMutations([
      'nextPage',
    ]),
  },
}
</script>

<style>
#app {
  height: 100vh;
}
</style>
