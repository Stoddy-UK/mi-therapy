const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;
const mongoose = require('mongoose')

mongoose.connect(`${MONGO_URI}/${DB_NAME}`)
    .then(() => {
      console.log('connected')
    })
    .catch((error) => {
      console.log(error)
    })

module.exports = mongoose