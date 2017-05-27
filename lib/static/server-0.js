
console.time('init-def-blank-id')

const util = require('util')
const fs = require('fs')

const Koa = require('koa')

// creates predicates for catches that match core bubble codes for async code etc
const E = require('core-error-predicates').globalize()
const filter = require('lodash.filter')

const configure = require('./config')()

//const Validator = require('./lib/validator-promise')
const log = require('./lib/org/log')

//let jacket = new Jacket()
let server = new Koa()
configure.middleware()

// try load .api-settings.json
// catch(FileNotFoundException) {}

// TODO

// if this is being required by a test script, don't listen
if (!module.parent) {
  server.listen(PORT)
  //log.yes('.... Server up and running! ....')
}

console.timeEnd('init-def-blank-id')
module.exports.server = server
