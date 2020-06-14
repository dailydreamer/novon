/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  function randomStrategy(config) {
    return Array.prototype.concat(
      config.instructionPages.slice(0, 2),
      shuffle(config.imagePages),
      config.instructionPages[2]
    )
  }
  
  let config = {
    instructionPages: [{
      type: 'Instruction',
      content: {
        sentences: [
          '这部分实验是关于大学生对现代艺术喜好的调查。你将看到10幅画作，均是20世纪以来几位抽象派画家（如Pollock、Kandinsky等）的作品。请你按照顺序仔细观看每幅画，依次对每幅画的喜好程度进行评分 （1代表非常不喜欢，11代表非常喜欢），然后写一句简短的评语。可以是比较专业的评述，也可以是你自己的审美感受。',
          '如果你理解了实验内容，请按【空格键】继续',
          '如果你有任何问题，请停留在此页面上，并举手示意主试',
        ]
      }      
    }, {
      type: 'Instruction',
      content: {
        sentences: [
          '注意：图片出现后，请你在纸质版打分表上完成评分。评分之后，请按【空格键】进入下一张图片。所有图片只呈现一次，请你按照顺序，确认完成一幅图片的评分之后再进入下一幅图片。',
          '如果你理解了实验内容，请按【空格键】进入第一张图片。',
          '如果你有任何问题，请停留在此页面上，并举手示意主试',
        ]
      }
    }, {
      type: 'Instruction',
      content: {
        sentences: [
          '本部分实验结束，感谢你的参与！',
          '请同时按下 ALT + F4 结束'
        ]
      }
    }],
    imagePages: [{
      type: 'SingleImage',
      content: {
        url: require('./assets/抽象画2.png')
      }
    }, {
      type: 'SingleImage',
      content: {
        url: require('./assets/抽象画3.png')
      }
    }, {
      type: 'SingleImage',
      content: {
        url: require('./assets/抽象画11.png')
      }
    }, {
      type: 'SingleImage',
      content: {
        url: require('./assets/抽象画12.png')
      }
    }, {
      type: 'SingleImage',
      content: {
        url: require('./assets/抽象画14.png')
      }
    }, {
      type: 'SingleImage',
      content: {
        url: require('./assets/抽象画15.png')
      }
    }, {
      type: 'SingleImage',
      content: {
        url: require('./assets/抽象画18.png')
      }
    }, {
      type: 'SingleImage',
      content: {
        url: require('./assets/抽象画19.png')
      }
    }, {
      type: 'SingleImage',
      content: {
        url: require('./assets/抽象画21.png')
      }
    }, {
      type: 'SingleImage',
      content: {
        url: require('./assets/抽象画30.png')
      }
    }]
  }

export const pages = randomStrategy(config)