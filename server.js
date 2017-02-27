// Required for async/await, although N7.x.x should work....
require('babel-polyfill')

console.time('init')

const util = require('util')
const fs = require('fs')

const Koa = require('koa')
const Promise = require('bluebird')
// creates predicates for catches that match core bubble codes for async code etc
const E = require('core-error-predicates').globalize()
const dotEnv = require('dotenv')
const filter = require('lodash.filter')

const configure = require('./config/server')
const args = require('./config/args')
const paths = require('./config/paths')
const watch = require('./config/watch')
const constants = require('./config/constants')

//const Validator = require('./lib/validator-promise')
const log = require('./lib/static/log')

const dotEnvResult = dotEnv.config()
if (dotEnvResult === false) {
  console.error('missing dotenv or invalid ?? ....')
  process.exit(1)
}
const ENV = process.env.NODE_ENV
const PORT = parseInt(process.env.PORT,10)
const TARGET = process.env.npm_lifecycle_event

const flags = {
  dev:      process.env.NODE_ENV === 'development',
  staging:  process.env.NODE_ENV === 'staging',
  prod:     process.env.NODE_ENV === 'production',

  isTestingCommand:       TARGET === 'test',

  verbose:         args.verbose === true,
  isInvalid:       args.invalid === true,
  shouldValidate:  args.check   === true
}

console.timeEnd(API_ID)

module.exports.server = server
