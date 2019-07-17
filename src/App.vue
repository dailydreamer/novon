<template>
  <div id="app" v-focus @keyup.space="nextPage" tabindex="0">
    <component 
      :is="currentPage.type" 
      :content="currentPage.content">
    </component>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Instruction from './components/Instruction.vue'
import MultipleChoice from './components/MultipleChoice.vue'
import MultipleChoicePractice from './components/MultipleChoicePractice.vue'

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
  text-align: center;
}
</style>
