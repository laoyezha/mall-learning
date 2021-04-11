const router = require('koa-router')();
const meterial = require('./get');

router.get('/', meterial.getMeterial);


// exports = router;
module.exports = router.routes();