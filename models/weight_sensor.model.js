var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

// common model that will be used in every collection of weight sensors
var Weight_SensorSchema = new mongoose.Schema({
    Timestamp: Date,
    Value: Number,
    Patient: String
})

Weight_SensorSchema.plugin(mongoosePaginate)
const Weight_Sensor = mongoose.model('Weight_Sensor', Weight_SensorSchema)

module.exports = Weight_Sensor;