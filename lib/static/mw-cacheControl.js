export const cacheControl = async function(ctx, next) {
  await next()
  ctx.set('Cache-Control', 'no-cache, no-store')
}
