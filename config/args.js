const minimist = require('minimist')

const argv = process.argv.slice(2)

// is possible switches collide with mocha...
// TODO shimmmmmey
let args = minimist(argv,{
  alias:{
    // shortcuts
    'verbose':'v'
  },
  default:{
    // always verbose
    verbose: true
  }
})

module.exports = args
