const express = require('express')
const cors = require('cors')
const { redirect, shortUrl } = require('./controllers/urls.controller.js')

app = express()

//middlewares
app.use(express.json())
app.use(cors())

app.listen(8080, () => console.log('Server started at 8080'))

//routes 
app.get('/:code', redirect)
app.post('/new', shortUrl)



