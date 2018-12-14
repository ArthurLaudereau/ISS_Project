// Accessing the Service that we just created

var Weight_SensorService = require('../services/weight_sensor.service')
var PatientService = require('../services/patient.service')

// Saving the context of this module inside the _the variable

_this = this


// Async Controller function to get the To do List

exports.getWeight_Sensor = async function(req, res, next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
    
        var weight_sensors = await Weight_SensorService.getWeight_Sensor({}, page, limit)
        
        // Return the list of the weight sensors with the appropriate HTTP Status Code and Message.
        
        return res.status(200).json({status: 200, data: weight_sensors, message: "Succesfully Weight_Sensors Data Recieved"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createWeight_Sensor = async function(req, res, next){

    // Req.Body contains the form submit values.

    var weight_sensor = {
        Timestamp: req.body.Timestamp,
        Value: req.body.Value,
    }

    try{
        
        // Calling the Service function with the new object from the Request Body
    
        var createdWeight_Sensor = await Weight_SensorService.createWeight_Sensor(weight_sensor)
        return res.status(201).json({status: 201, data: createdWeight_Sensor, message: "Succesfully Created Weight_Sensor"})
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "Weight_Sensor Creation was Unsuccesfull"})
    }
}

exports.removeWeight_Sensor = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await Weight_SensorService.deleteWeight_Sensor(id)
        return res.status(204).json({status:204, message: "Succesfully Weight_Sensor Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}

// exports.updateWeight_Sensor = async function(req, res, next){

//     // Id is necessary for the update

//     if(!req.body._id){
//         return res.status(400).json({status: 400., message: "Id must be present"})
//     }

//     var id = req.body._id;

//     console.log(req.body)

//     var weight_sensor = {
//         id,
//         Timestamp: req.body.Timestamp ? req.body.Timestamp : null,
//         Value: req.body.Value ? req.body.Value : null,
//         Patient_ID: req.body.Patient_ID ? req.body.Patient_ID : null
//     }

//     try{
//         var updatedWeight_Sensor = await Weight_SensorService.updateTodo(weight_sensor)
//         return res.status(200).json({status: 200, data: updatedWeight_Sensor, message: "Succesfully Updated Tod"})
//     }catch(e){
//         return res.status(400).json({status: 400., message: e.message})
//     }
// }

