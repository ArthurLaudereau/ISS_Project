var express = require('express')

var router = express.Router()
var weight_sensors = require('./api/weight_sensor.route')
var patients = require('./api/patient.route')


router.use('/weight_sensor', weight_sensors);
router.use('/patient', patients);


module.exports = router;