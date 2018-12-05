var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

// common model that will be used in every collection of weight sensors
var PatientSchema = new mongoose.Schema({
    Patient_ID : Schema.Types.ObjectId,
    Name : String,
    BirthDate : Date,
    In_Incubator : String
})

PatientSchema.plugin(mongoosePaginate)
const Patient = mongoose.model('Patient', PatientSchema)

module.exports = Patient;