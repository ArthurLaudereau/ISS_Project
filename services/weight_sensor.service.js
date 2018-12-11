// Getting the Newly created Mongoose Model we just created 

var Weight_Sensor = require('../models/weight_sensor.model')
// var Patient = require('../models/patient.model')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the List of the weight values

exports.getWeight_Sensor = async function(query, page, limit){

    // Options setup for the mongoose paginate

    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var weight_sensors = await Weight_Sensor.paginate(query, options)
        
        // Return the list of the weight_sensors that was retured by the mongoose promise

        return weight_sensors;

    } catch (e) {

        // return a Error message describing the reason 

        throw Error('Error while Paginating Sensors')
    }
}

// TEMPORARY FUNCTION : used to test the app
exports.createWeight_Sensor = async function(weight_sensor){
    
    // Creating a new Mongoose Object by using the new keyword

    var newWeight_Sensor = new Weight_Sensor({
        Timestamp: new Date(),
        Value: weight_sensor.Value,
        // PatientID: Patient.Patient_ID
    })

    try{

        // TEMP : Saving the Sensor to the database 

        var savedWeight_Sensor = await newWeight_Sensor.save()

        return savedWeight_Sensor;
    }catch(e){
      
        // return a Error message describing the reason     

        throw Error("Error while Creating Weight_Sensor")
    }
}

// TEMPORARY FUNCTION : used to test the app
exports.deleteWeight_Sensor = async function(id){
    
    // Delete the Weight_Sensor

    try{
        var deleted = await Weight_Sensor.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Weight_Sensor Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Weight_Sensor")
    }
}

// Update function, but not used here

// exports.updateWeight_Sensor = async function(weight_sensor){
//     var id = weight_sensor.id

//     try{
//         //Find the old Weight_Sensor Object by the Id
    
//         var oldWeight_Sensor = await Weight_Sensor.findById(id);
//     }catch(e){
//         throw Error("Error occured while Finding the Weight_Sensor")
//     }

//     // If no old Weight_Sensor Object exists return false

//     if(!oldWeight_Sensor){
//         return false;
//     }

//     console.log(oldWeight_Sensor)

//     //Edit the Weight_Sensor Object

//     oldWeight_Sensor.title = weight_sensor.title
//     oldWeight_Sensor.description = weight_sensor.description
//     oldWeight_Sensor.status = weight_sensor.status


//     console.log(oldWeight_Sensor)

//     try{
//         var savedWeight_Sensor = await oldWeight_Sensor.save()
//         return savedWeight_Sensor;
//     }catch(e){
//         throw Error("And Error occured while updating the Weigth_Sensor");
//     }
// }
