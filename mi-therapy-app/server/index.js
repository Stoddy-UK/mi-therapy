require('dotenv').config();
const cors = require('cors')
const router = require('./router')
const express = require('express')



const app = express()

app
  .use(cors())
  .use(express.json())
  .use((req, res, next) => {
    console.log(req.path, req.method)
    next()
    })
    .use(router)
    app.listen(process.env.PORT, () => {
      console.log('listening')
    })
    