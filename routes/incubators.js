var express = require('express');
var router = express.Router();

/* GET Incubators page. */
router.get('/', function(req, res, next) {
  res.render('incubators', { title: 'Incubators' });
});

module.exports = router;
