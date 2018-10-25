const express = require ('express')
const app = express()
const cors = require ('cors')
const parser = require('body-parser')



app.use(cors())
app.use(parser.json())
app.use(parser.urlencoded({ extended: false}))
