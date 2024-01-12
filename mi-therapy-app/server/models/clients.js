const mongoose = require('./db')

const Schema = mongoose.Schema

const clientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telNum: { type: Number, required: false },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  hourlyRate: { type: Number, required: true },
  totalSessions: { type: Number, required: false },
  unpaidSessions: { type: Number, required: false }
})

module.exports = mongoose.model('Client', clientSchema)