var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

// common model that will be used in every collection of bools
var BoolSchema = new mongoose.Schema({
    Patient : String,
    In_Incubator : Boolean
})

BoolSchema.plugin(mongoosePaginate)
const Bool = mongoose.model('Bool', BoolSchema)

module.exports = Bool;