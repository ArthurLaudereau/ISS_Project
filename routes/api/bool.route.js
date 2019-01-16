var express = require('express')

var router = express.Router()

// Getting the Bool Controller that we just created

var BoolController = require('../../controllers/bool.controller');


// Map each API to the Controller FUnctions

router.get('/', BoolController.getBool)

router.post('/', BoolController.createBool)

router.put('/', BoolController.updateBool)

router.delete('/:id',BoolController.removeBool)


// Export the Router

module.exports = router;