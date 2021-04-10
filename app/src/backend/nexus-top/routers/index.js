const router = require('koa-router')();
const r1 = require('./r1');
const r2 = require('./r2');


router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

router.use('/r1', r1);
router.use('/r2', r2);

// exports = router;
module.exports = router;