var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

// common model that will be used in every collection of weight sensors
var PatientSchema = new mongoose.Schema({
    Name : String,
    BirthDate : Date,
    In_Incubator : Boolean
})

PatientSchema.plugin(mongoosePaginate)
const Patient = mongoose.model('Patient', PatientSchema)

module.exports = Patient;