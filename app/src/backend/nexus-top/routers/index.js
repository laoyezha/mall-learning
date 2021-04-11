const router = require('koa-router')();
const r1 = require('./r1');
const r2 = require('./r2');
const meterial = require('./meterial');


router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

router.use('/r1', r1);
router.use('/r2', r2);
router.use('/meterial', meterial);

// exports = router;
module.exports = router;