const mongoose = require('mongoose')

const Schema = mongoose.Schema

// const calenderSchema = new Schema({
//   day: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: String,
//     required: true
//   },
//   svnAm: {
//     clientID: { type: String  }, name: { type: String  }, time: { type: Date  }, reg: { type: Boolean }, free: { type: Boolean }
//   },
//   egtAm: {
//     clientID: { type: String  }, name: { type: String  }, time: { type: Date  }, reg: { type: Boolean }, free: { type: Boolean }
//   },
//   ninAm: {
//     clientID: { type: String  }, name: { type: String  }, time: { type: Date  }, reg: { type: Boolean }, free: { type: Boolean }
//   },
//   tenAm: {
//     clientID: { type: String  }, name: { type: String  }, time: { type: Date  }, reg: { type: Boolean }, free: { type: Boolean }
//   },
//   elvAm: {
//     clientID: { type: String  }, name: { type: String  }, time: { type: Date  }, reg: { type: Boolean }, free: { type: Boolean }
//   },
//   twvPm: {
//     clientID: { type: String  }, name: { type: String  }, time: { type: Date  }, reg: { type: Boolean }, free: { type: Boolean }
//   },
//   onePm: {
//     clientID: { type: String  }, name: { type: String  }, time: { type: Date  }, reg: { type: Boolean }, free: { type: Boolean }
//   },
//   twoPm: {
//     clientID: { type: String  }, name: { type: String  }, time: { type: Date  }, reg: { type: Boolean }, free: { type: Boolean }
//   },
//   trePm: {
//     clientID: { type: String  }, name: { type: String  }, time: { type: Date  }, reg: { type: Boolean }, free: { type: Boolean }
//   },
//   forPm: {
//     clientID: { type: String  }, name: { type: String  }, time: { type: Date  }, reg: { type: Boolean }, free: { type: Boolean }
//   },
//   fvePm: {
//     clientID: { type: String  }, name: { type: String  }, time: { type: Date  }, reg: { type: Boolean }, free: { type: Boolean }
//   },
//   sixPm: {
//     clientID: { type: String  }, name: { type: String  }, time: { type: Date  }, reg: { type: Boolean }, free: { type: Boolean }
//   },
//   svnPm: {
//     clientID: { type: String  }, name: { type: String  }, time: { type: Date  }, reg: { type: Boolean }, free: { type: Boolean }
//   },
// })


const sessionSchema = new Schema({
  clientId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  therapistId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Session', sessionSchema)