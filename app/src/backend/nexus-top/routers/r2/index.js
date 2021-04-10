const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>2</h1>';
});

// exports = router;
module.exports = router.routes();