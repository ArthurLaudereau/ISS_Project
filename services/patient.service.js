// Getting the Newly created Mongoose Model we just created 

var Patient = require('../models/patient.model')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the List of the weight values

exports.getPatient = async function(query, page, limit){

    // Options setup for the mongoose paginate

    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var patients = await Patient.paginate(query, options)
        
        // Return the list of the patients that was retured by the mongoose promise

        return patients;

    } catch (e) {

        // return a Error message describing the reason 

        throw Error('Error while Paginating Patients')
    }
}

// TEMPORARY FUNCTION : used to test the app
exports.createPatient = async function(patient){
    
    // Creating a new Mongoose Object by using the new keyword

    var newPatient = new Patient({
        Sensor_related: patient.Sensor_related, //TODO POPULATE
        Name: patient.Name,
        BirthDate: patient.BirthDate,
        In_Incubator: patient.In_Incubator
    })

    try{

        // TEMP : Saving the Patient to the database 

        var savedPatient = await newPatient.save()

        return savedPatient;
    }catch(e){
      
        // return a Error message describing the reason     

        throw Error("Error while Creating Patient")
    }
}

// TEMPORARY FUNCTION : used to test the app
exports.deletePatient = async function(id){
    
    // Delete the Patient

    try{
        var deleted = await Patient.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Patient Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Patient")
    }
}

// Update function, but not used here

// exports.updatePatient = async function(patient){
//     var id = patient.id

//     try{
//         //Find the old Patient Object by the Id
    
//         var oldPatient = await Patient.findById(id);
//     }catch(e){
//         throw Error("Error occured while Finding the Patient")
//     }

//     // If no old Patient Object exists return false

//     if(!oldPatient){
//         return false;
//     }

//     console.log(oldPatient)

//     //Edit the Patient Object

//     oldPatient.title = patient.title
//     oldPatient.description = patient.description
//     oldPatient.status = patient.status


//     console.log(oldPatient)

//     try{
//         var savedPatient = await oldPatient.save()
//         return savedPatient;
//     }catch(e){
//         throw Error("And Error occured while updating the Patient");
//     }
// }
