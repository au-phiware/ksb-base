const util = require('util')
const memwatch = require('memwatch-next')
//const log = require('./log')
memwatch.on('leak', function(info) {
  console.info(`MEMWATCH:info:${util.inspect(info, {depth: null})}`)
})
