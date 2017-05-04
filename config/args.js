const minimist = require('minimist')

const argv = process.argv.slice(2)

// is possible switches collide with mocha...
// TODO shimmmmmey
let args = minimist(argv,{
  alias:{
    'verbose':'v',
    'check':'c'
  },
  default:{
    // be noisy ofc !
    verbose: true,
    // set to false to not validate schemas
    check: true,
    // invalid data
    invalid: false
  }
})

module.exports = args
