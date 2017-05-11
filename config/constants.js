const zlib = require('zlib')

// lets discuss these settings.... and how to vary with dot path config system...

export const STRICT_PARSE_DEFAULT_JSON = {
  enabledTypes: ['json'],
  encode: 'utf-8',
  //formLimit: limit of the urlencoded body. If the body ends up being larger than this limit, a 413 error code is returned. Default is 56kb.
  // limit of the json body. Default is 1mb.
  jsonLimit: '32kb',
  //textLimit: limit of the text body. Default is 1mb.
  //strict: when set to true, JSON parser will only accept arrays and objects. Default is true. See strict mode in co-body. In strict mode, this.request.body will always be an object(or array), this avoid lots of type judging. But text body will always return string type.
  strict: true,
  onerror: (err, ctx) => {
    log.warn(`CO:BODY:STRICT-PARSE: dirty payload: ${ctx.request.ip} ${ctx.request.href}`)
    ctx.status = 400
    throw err
  }
}

export const TEXT_COMPRESS_FILTER = {
  filter: function (content_type) {
    return /text/i.test(content_type)
  },
  threshold: 2048,
  flush: zlib.constants.Z_SYNC_FLUSH
}
