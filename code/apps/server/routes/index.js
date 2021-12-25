var express = require('express');
var { add } = require('@foxmono/common');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: `5 + 1 = ${add(5, 1)} ` });
});

module.exports = router;
