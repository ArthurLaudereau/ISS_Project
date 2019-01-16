// Getting the Newly created Mongoose Model we just created 

var Bool = require('../models/bool.model')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the List of the weight values

exports.getBool = async function(query, page, limit){

    // Options setup for the mongoose paginate

    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var bools = await Bool.paginate(query, options)
        
        // Return the list of the bools that was retured by the mongoose promise

        return bools;

    } catch (e) {

        // return a Error message describing the reason 

        throw Error('Error while Paginating Bools')
    }
}

// TEMPORARY FUNCTION : used to test the app
exports.createBool = async function(bool){
    
    // Creating a new Mongoose Object by using the new keyword

    var newBool = new Bool({
        Patient: bool.Patient,
        In_Incubator: bool.In_Incubator
    })

    try{

        // TEMP : Saving the Bool to the database 

        var savedBool = await newBool.save()

        return savedBool;
    }catch(e){
      
        // return a Error message describing the reason     

        throw Error("Error while Creating Bool")
    }
}

// TEMPORARY FUNCTION : used to test the app
exports.deleteBool = async function(id){
    
    // Delete the Bool

    try{
        var deleted = await Bool.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Bool Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Bool")
    }
}

exports.updateBool = async function(bool){
    var id = bool.id

    try{
        //Find the old Bool Object by the Id
        update = {
            Patient: bool.Patient,
            In_Incubator: bool.In_Incubator,
        }
        var oldBool = await Bool.findOneAndUpdate(id, update);
    }catch(e){
        throw Error("Error occured while Finding the Bool")
    }

    // If no old Bool Object exists return false

    if(!oldBool){
        return false;
    }

    //Edit the Bool Object

    oldBool.Patient = bool.Patient
    oldBool.In_Incubator = bool.In_Incubator


    console.log(oldBool)

    try{
        var savedBool = await oldBool.save()
        return savedBool;
    }catch(e){
        throw Error("And Error occured while updating the Bool");
    }
}
