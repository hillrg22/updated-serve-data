const express = require ('express')
const app = express()
const cors = require ('cors')
const parser = require('body-parser')

app.use(cors())
app.use(parser.json())
app.use(parser.urlencoded({ extended: false}))

let port = process.env.PORT || 3000


const cohorts = require('./cohorts.js')

// console.log(cohorts)

app.get('/', (req,res,next) => {
  res.send('YOOOOOOOOOO')
})

app.listen(port, () => console.log(`serve-data server running on port ${port}`))
