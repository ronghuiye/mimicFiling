const express = require('express')
const app = express()
const calendarList = require('./calendars.json')
const utils = require('./utils')

let globalCalendars = calendarList.calendars
let ids = 7

app.use(express.json())
app.get('/api/v1/calendars', function (req, res) {
  let order = req.query.order || 'asc'
  let orderBy = req.query.orderBy || 'id'
  let page = req.query.page || 0
  let rowsPerPage = req.query.rowsPerPage || 5

  let calendars = utils.stableSort(globalCalendars, utils.getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  res.send({
    status: 200,
    success: true,
    pageState: {order,orderBy,page,rowsPerPage,totalCount:globalCalendars.length},
    data: calendars
  })
})

app.post('/api/v1/calendars', function (req, res) {

  if (req.body == null || !req.body.legalEntity || !req.body.state)
    return res.status(400).json({error: 'request body error'})
  req.body.id = ids++
  globalCalendars.push(req.body)
  res.send({
    status: 200,
    success: true
  })
})

app.delete('/api/v1/calendars', function (req, res) {
  if (req.body == null || !req.body.ids || !req.body.ids.length)
    return res.status(400).json({error: 'request body error'})
  let ids = req.body.ids
  globalCalendars = globalCalendars.filter(k => !ids.includes(k.id))
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
    returns = globalCalendars.map(c => {
      let obj = {}
      obj.id = c.id
      obj.state = c.state
      obj.return = c.return
      obj.filingType = c.filingType
      obj.legalEntity = c.legalEntity
      obj.amount = month * 1000
      return obj
    })
  } else {
    returns = globalCalendars.filter(a => a.filingFrequency === 1).map(c => {
      let obj = {}
      obj.id = c.id
      obj.state = c.state
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
    data: globalCalendars
  })
})
console.log('Starting...')
app.listen(3001)