const path = require('path')
const _root = path.resolve(__dirname + '/../')
let paths = {
  root: _root,
  api: _root+'/api',
  tmp: _root+'/tmp',
  logs: _root+'/logs'
}
module.exports = paths
