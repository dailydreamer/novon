import Vue from 'vue'
import Vuex from 'vuex'
import {pages as novonPages} from './configs/novon/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: novonPages,
    pageIdx: 0,
    records: [],
  },
  mutations: {
    nextPage (state) {
      state.pageIdx += 1;
      if (state.pageIdx >= state.pages.length) {
        state.pageIdx = state.pages.length-1;
      }
    },
    addRecord (state, record) {
      state.records.append(record)
    },
  }
})