var express = require('express');
var router = express.Router();

var PatientController = require('../../controllers/patient.controller');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Baby Incubator' });
});

module.exports = router;
