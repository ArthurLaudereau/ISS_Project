var express = require('express')

var router = express.Router()

// Getting the Weight_Sensor Controller that we just created

var Weight_SensorController = require('../../controllers/weight_sensor.controller');


// Map each API to the Controller FUnctions

router.get('/', Weight_SensorController.getWeight_Sensor)

router.post('/', Weight_SensorController.createWeight_Sensor)

// router.put('/', Weight_SensorController.updateWeight_Sensor)

router.delete('/:id',Weight_SensorController.removeWeight_Sensor)


// Export the Router

module.exports = router;