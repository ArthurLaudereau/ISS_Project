// Accessing the Service that we just created

var BoolService = require('../services/bool.service')

// Saving the context of this module inside the _the variable

_this = this


// Async Controller function to get the To do List

exports.getBool = async function(req, res, next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 100; 

    try{
    
        var bools = await BoolService.getBool({}, page, limit)
        
        // Return the list of the bools with the appropriate HTTP Status Code and Message.
        return res.status(200).json({status: 200, data: bools, message: "Succesfully Bools Data Received"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createBool = async function(req, res, next){

    // Req.Body contains the form submit values.

    var bool = {
        Patient: req.body.Patient,
        In_Incubator: req.body.In_Incubator
    }

    try{
        
        // Calling the Service function with the new object from the Request Body
    
        var createdBool = await BoolService.createBool(bool)
        return res.status(201).json({status: 201, data: createdBool, message: "Succesfully Created Bool"})
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "Bool Creation was Unsuccesfull"})
    }
}

exports.removeBool = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await BoolService.deletedBool(id)
        return res.status(204).json({status:204, message: "Succesfully Bool Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}

exports.updateBool = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body.id;

    console.log(req.body)

    var bool = {
        Patient: req.body.Patient ? req.body.Patient : null,
        In_Incubator: req.body.In_Incubator ? req.body.In_Incubator : null
    }

    try{
        var updatedBool = await BoolService.updateBool(bool)
        return res.status(200).json({status: 200, data: updatedBool, message: "Succesfully Updated Bool"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

