const path = require('path')
const tsPreprocessor = require('./typescript-preprocessor')

module.exports = {
  process: function(src, filePath) {
    if (filePath.match(/\.tsx$/) && !filePath.match(/\.d\.ts$/)) {
      return tsPreprocessor
    }
  }
}
