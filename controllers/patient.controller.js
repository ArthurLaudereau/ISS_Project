// Accessing the Service that we just created

var PatientService = require('../services/patient.service')

// Saving the context of this module inside the _the variable

_this = this


// Async Controller function to get the To do List

exports.getPatient = async function(req, res, next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
    
        var patients = await PatientService.getPatient({}, page, limit)
        
        // Return the list of the patients with the appropriate HTTP Status Code and Message.
        return res.status(200).json({status: 200, data: patients, message: "Succesfully Patients Data Recieved"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createPatient = async function(req, res, next){

    // Req.Body contains the form submit values.

    var patient = {
        Sensor_related: req.body.Sensor_related, //WIP
        Name: req.body.Name,
        BirthDate: req.body.BirthDate,
        In_Incubator: req.body.In_Incubator
    }

    try{
        
        // Calling the Service function with the new object from the Request Body
    
        var createdPatient = await PatientService.createPatient(patient)
        return res.status(201).json({status: 201, data: createdPatient, message: "Succesfully Created Weight_Sensor"})
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "Patient Creation was Unsuccesfull"})
    }
}

exports.removePatient = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await PatientService.deletePatient(id)
        return res.status(204).json({status:204, message: "Succesfully Patient Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}

exports.updatePatient = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body.id;

    console.log(req.body)

    var patient = {
        id,
        Name: req.body.Name ? req.body.Name : null,
        BirthDate: req.body.BirthDate ? req.body.BirthDate : null,
        In_Incubator: req.body.In_Incubator ? req.body.In_Incubator : null
    }

    try{
        var updatedPatient = await PatientService.updatePatient(patient)
        return res.status(200).json({status: 200, data: updatedPatient, message: "Succesfully Updated Patient"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

