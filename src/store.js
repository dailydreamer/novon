import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    }, {
      type: 'MultipleChoicePractice',
      content: {
        question: {
          type: 'text',
          content: '练习问题',
        },
        choices: [{
          type: 'text',
          key: 'a',
          content: 'a',
        }, {
          type: 'text',
          key: 'b',
          content: 'b',            
        }],
        answer: {
          key: 'a'
        }
      }
    }],
    pageIdx: 0,    
  },
  mutations: {
    nextPage (state) {
      state.pageIdx += 1;
      if (state.pageIdx >= state.pages.length) {
        state.pageIdx = 0;
      }
    }
  }
})