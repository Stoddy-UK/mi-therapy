const mongoose = require('./db')

const Schema = mongoose.Schema

const clientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: String, required: true },
  telNum: { type: Number, required: true },
  hourlyRate: { type: String, required: true },
  address: { type: String, required: true},
  postCode: { type: String, required: true},
  gpAddress: { type: String, required: true},
  emergencyPhone: { type: Number, required: true },
  totalSessions: { type: Number, required: false },
  unpaidSessions: { type: Number, required: false },
  therapistId : { type: String, required: false }
})

module.exports = mongoose.model('Client', clientSchema)