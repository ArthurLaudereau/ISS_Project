var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// common model that will be used in every collection of weight sensors
var PatientSchema = new mongoose.Schema({
    // Patient_ID : ObjectId,
    Name : String,
    BirthDate : Date,
    In_Incubator : String
})

PatientSchema.plugin(mongoosePaginate)
const Patient = mongoose.model('Patient', PatientSchema)

module.exports = Patient;