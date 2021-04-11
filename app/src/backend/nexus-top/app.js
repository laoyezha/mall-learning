// const logger = require('koa-logger');
const router = require('./routers');
const Koa = require('koa');
const topClient = require('./topSdkHelper')
const config = require('./config/config.json')


const app = new Koa();
// app.use(logger());

app.context.topClient = topClient;
app.context.topInfo = {
    site_id: config['site_id'],
    adzone_id: config['adzone_id']
};

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