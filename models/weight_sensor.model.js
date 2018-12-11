var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// common model that will be used in every collection of weight sensors
var Weight_SensorSchema = new mongoose.Schema({
    Timestamp: Date,
    Value: Number,
    // Patient_ID : ObjectId
})

Weight_SensorSchema.plugin(mongoosePaginate)
const Weight_Sensor = mongoose.model('Weight_Sensor', Weight_SensorSchema)

module.exports = Weight_Sensor;