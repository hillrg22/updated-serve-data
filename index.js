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
  res.json({data:cohorts})
})

app.get('/:id', (req,res,next) =>{
  const id = req.params.id
  const cohort = cohorts.filter(single => {
      return single.id == id
    })

  if (!cohort.length) {
    next()
  }

  res.json({data:cohort})
})





app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  res.status(404).send({error: 'No record found!', status: 404, url: req.originalUrl})
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  console.error('ERROR', err)

  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined

  res.status(500).send({
    error: err.message,
    stack,
    url: req.originalUrl
  })
}


app.listen(port, () => console.log(`serve-data server running on port ${port}`))
