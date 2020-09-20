const express = require('express')
const app = express()
const calendarList = require('./calendars.json')
let kk = calendarList.calendars

app.use(express.json())
app.get('/api/v1/calendars', function (req, res) {
  res.send({
    status: 200,
    success: true,
    data: kk
  })
})

app.post('/api/v1/calendars', function (req, res) {

  if (req.body == null || !req.body.legalEntity || !req.body.state)
    return res.status(400).json({error: 'request body error'})
  req.body.id = kk.length + 1
  kk.push(req.body)
  res.send({
    status: 200,
    success: true
  })
})

app.get('/api/v1/returns/:year/:month', function (req, res) {

  let month = req.params.month
  let includeQuarterlyReturns = month % 3 === 0
  let returns = []
  if (includeQuarterlyReturns) {
    returns = kk.map(c => {
      let obj = {}
      obj.id = c.id
      obj.state = c.id
      obj.return = c.return
      obj.filingType = c.filingType
      obj.legalEntity = c.legalEntity
      obj.amount = month * 1000
      return obj
    })
  } else {
    returns = kk.filter(a => a.filingFrequency === 1).map(c => {
      let obj = {}
      obj.id = c.id
      obj.state = c.id
      obj.return = c.return
      obj.filingType = c.filingType
      obj.legalEntity = c.legalEntity
      obj.amount = month * 1000
    return obj
  })
  }
  res.send({
    status: 200,
    success: true,
    data: returns
  })
})
app.get('/api/v1/returns/id', function (req, res) {
  res.send({
    status: 200,
    success: true,
    data: kk
  })
})
console.log('Starting...')
app.listen(3001)