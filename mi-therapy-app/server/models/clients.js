const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telNum: { type: Number, required: false },
  age: { type: String, required: ture },
  gender: { type: String, required: ture },
  hourlyRate: { type: Number, required: ture },
  totalSessions: { type: Number, required: false },
  unpaidSessions: { type: Number, required: false }
})

module.exports = mongoose.model('Client', clientSchema)