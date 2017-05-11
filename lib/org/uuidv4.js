const uuidv4 = require('uuid/v4')
/**
 * also: python -c "import sys,uuid; sys.stdout.write(uuid.uuid4().hex)" | pbcopy && pbpaste && echo
 */
function shortUuidV4() {
  return uuidv4().toString().replace(/-/gi,'')
}
module.exports = shortUuidV4
if (!module.parent) {
  // print on console
  console.info(shortUuidV4())
}
