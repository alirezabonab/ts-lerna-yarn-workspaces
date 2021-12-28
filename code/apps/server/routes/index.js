var express = require('express');
var { multiply } = require('@foxmono/common');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: `5 * 1 = ${multiply(5, 1)} ` });
});

module.exports = router;
