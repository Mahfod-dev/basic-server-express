const express = require('express')
const app = express()
const path = require('path')
const rootDir = require('./utils/path')

const userRoute = require('./routes/users')
const homeRoute = require('./routes/home')

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

app.use(homeRoute)
app.use('/', userRoute)

app.use((req, res) => {
	res.status(404).send('error found')
})

app.listen(3000)
