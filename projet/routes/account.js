var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('account', { title: 'Music Manager' });
});

module.exports = router;