require('dotenv').config()
const express = require('express')
const app  = express()
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const PORT =  4000 
const cors = require('cors')
const mongoose  =require('mongoose')
const config =  require('./data.js')
const eventsRoute = require('./events.route')
const usersRoute = require('./users.route')
const passport = require("passport")

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})

mongoose.Promise = global.Promise
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
  () => {console.log('Databse is connected')},
  err => { console.log('Can not connect to the database' + err)}
)


app.use(cors())
app.use(bodyParser.urlencoded({extende: true}))
app.use(bodyParser.json())


//pasport middleware
app.use(passport.initialize())

//Passport config
require("./config/passport")(passport)

//Routes
app.use('/events', eventsRoute)
app.use('/users', usersRoute)


app.use(formData.parse())

app.post('/image-upload', (req, res) => {

  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
  Promise
    .all(promises)
    .then(results => res.json(results))
})


app.listen(PORT, function(){
  console.log('Server is running on Port:' ,PORT)
})