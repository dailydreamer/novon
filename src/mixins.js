import { mapMutations } from 'vuex'


export const nextPageMixin = {
  data: function() {
    return {
      timeout: null,
      timer: null,
    };
  },
  mounted() {
    if (this.timeout) {
      this.timer = setTimeout(this.nextPage, this.timeout);
    } else {
      window.addEventListener('keypress', this.enterNextPage);
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    } else {
      window.removeEventListener('keypress', this.enterNextPage);
    }
  },
  methods: {
    enterNextPage: function(e) {
      if (e.key === 'Enter') {
        this.nextPage()
      }
    },
    ...mapMutations([
      'nextPage',
    ]),
  }
}

export const recordTimeMixin = {
  data: function() {
    return {
      startTime: null,
      record: {},
    };
  },
  mounted() {
    this.startTime = new Date()
  },
  beforeDestroy() {
    let reactTime = new Date() - this.startTime
    this.record['reactTime'] = reactTime // ms
  },
}

export const makeChoiceMixin = {
  props: {
    content: Object
  },
  data: function() {
    return {
      record: {},
    };
  },
  mounted() {
    window.addEventListener('keypress', this.enterNextPage);
  },
  beforeDestroy() {
    window.removeEventListener('keypress', this.enterNextPage);
  },
  methods: {
    enterNextPage: function(e) {
      let key = e.key.toLowerCase()
      if (this.content.keys.includes(key)) {
        this.record['answer'] = key
        this.nextPage()
      }
    },
    ...mapMutations([
      'nextPage',
    ]),
  }
}

export const addRecordMixin = {
  data: function() {
    return {
      record: {},
    };
  },
  methods: {
    ...mapMutations([
      'addRecord',
    ]),
  },
  beforeDestroy() {
    this.addRecord(this.record)
  },
}


