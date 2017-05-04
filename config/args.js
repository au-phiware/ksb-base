const minimist = require('minimist')

const argv = process.argv.slice(2)

// is possible switches collide with mocha...
// TODO shimmmmmey
let args = minimist(argv,{
  alias:{
    // shortcuts
    'verbose':'v',
    'check':'c',
    'invalid':'i'
  },
  default:{
    // be noisy ofc !
    verbose: true,
    // set to false to not validate schemas
    check: true,
    // invalid data - for testing
    invalid: false
  }
})

module.exports = args
