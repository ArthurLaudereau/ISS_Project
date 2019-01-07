var express = require('express');
var router = express.Router();

/* GET Team page. */
router.get('/', function(req, res, next) {
  res.render('insert', { title: 'Insert' });
});

module.exports = router;
