require('dotenv').config();
const cors = require('cors')
const router = require('./router')
const express = require('express')
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

const app = express()

app
  .use(cors())
  .use(express.json())
  .use((req, res, next) => {
    console.log(req.path, req.method)
    next()
    })
    .use(router)

    mongoose.connect(`${MONGO_URI}/${DB_NAME}`)
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.log('listening')
      })
    })
    .catch((error) => {
      console.log(error)
    })