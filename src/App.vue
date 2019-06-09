<template>
  <div id="app" v-focus @keyup.space="nextPage" tabindex="0">
    <component 
      :is="currentPage.type" 
      :content="currentPage.content">
    </component>
  </div>
</template>

<script>
import Instruction from './components/Instruction.vue'
import MultipleChoice from './components/MultipleChoice.vue'

export default {
  name: 'app',
  data: function() {
    return {
      pages: [{
        type: 'Instruction',
        content: {
          sentences: [
            '欢迎你参加本次实验！',
            '本实验是一个分类任务。请你将电脑屏幕上出现的图形正确地分到A组或者B组中。两组分别有一个示例图片。',
            '按【空格键】继续',
          ]
        }
      }, {
        type: 'MultipleChoice',
        content: {
          question: {
            type: 'text',
            content: '问题',
          },
          choices: [{
            type: 'text',
            key: 'a',
            content: 'a',
          }, {
            type: 'text',
            key: 'b',
            content: 'b',            
          }]
        }
      }],
      pageIdx: 0
    }
  },
  computed: {
    currentPage: function(){
      return this.pages[this.pageIdx];
    }
  },
  components: {
    Instruction,
    MultipleChoice,
  },
  methods: {
    nextPage() {
      this.pageIdx += 1;
      console.log(`page: ${this.pageIdx}`)
      if (this.pageIdx >= this.pages.length) {
        this.pageIdx = 0;
      }
    }
  },
}
</script>

<style>
#app {
  text-align: center;
}
</style>
