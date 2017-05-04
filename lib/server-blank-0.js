
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

// meaningful booleans
// simple object, method. Next a Runtime() constructor. That is optional to sit in front of a server file to
// handle the environment.
let flags = {}
flags.hasEnvironment = process.env.NODE_ENV
if (flags.hasEnvironment) {
  flags.dev =     ~process.env.NODE_ENV.indexOf('dev')
  flags.staging = process.env.NODE_ENV === 'staging'
  flags.prod =    process.env.NODE_ENV && ~process.env.NODE_ENV.indexOf('prod')
} else {
  console.error('invalid environment?')
  process.exit(1)
}
flags.isTestingCommand = TARGET === 'test'
flags.verbose = args.verbose === true
flags.isInvalid = args.invalid === true
flags.shouldValidate = args.check === true

let server = new Koa()
configure.middleware()

// try load .api-settings.json
// catch(FileNotFoundException) {}

console.timeEnd('init')
module.exports.server = server
