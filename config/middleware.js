const bodyParser = require('koa-bodyparser')
const responseTime = require('koa-response-time')
// stuck on older dep for mongodb.client, fork or pass noqa - is based on 1.x mw spec
const koaMongo = require('koa-mongo')
const morgan = require('koa-morgan')
const helmet = require('koa-helmet')
const compress = require('koa-compress')
// Limit max requests on each http Keep-Alive connection.
const maxRequest = require('koa-maxrequests')
const conditionalGet = require('koa-conditional-get')
const etag = require('koa-etag')
const jwt = require('koa-jwt')
