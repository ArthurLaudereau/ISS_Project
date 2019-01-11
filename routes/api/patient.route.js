var express = require('express')

var router = express.Router()

// Getting the Patient Controller that we just created

var PatientController = require('../../controllers/patient.controller');


// Map each API to the Controller FUnctions

router.get('/', PatientController.getPatient)

router.post('/', PatientController.createPatient)

router.put('/', PatientController.updatePatient)

router.delete('/:id',PatientController.removePatient)


// Export the Router

module.exports = router;