var express = require('express');
var { add } = require('@foxmono/common');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: `4 + 3 = ${add(4, 3)} ` });
});

module.exports = router;
