// const logger = require('koa-logger');
const router = require('./routers');
const Koa = require('koa');

const app = new Koa();
// app.use(logger());


app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// response
// app.use(ctx => {
//     ctx.body = 'Hello Koa';
// });
app.use(router.routes());

app.on('error', (err, ctx) => {
    log.error('server error', err, ctx);
});

app.listen(5000);