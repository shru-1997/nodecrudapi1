// Import expressjs for creating the server and creating api routes
const express = require('express')

// Body Parser for urlencoded form data 
const bodyParser = require('body-parser')

// Importing Mongo client
const MongoClient = require('mongodb').MongoClient 

// Creating app function from the express functional constructor to use it for creating
// server and apis
const app = express()

// Enabling body parser with urlencoded form data to be true
app.use(bodyParser.urlencoded({extended:true}))

// Database Connection String
const connectionString ="mongodb+srv://shruthireddy:shruthi1709@cluster0.6lloq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// Connecting the database
MongoClient.connect(connectionString,(err,client)=>{
    if(err) return console.error(err)
    console.log('connected to database')
})

// Two parameters first one route, second one is function what you want to execute
app.post('/quotes', (req,res) => {
    res.send(req.body)
})

// Creating the server
const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is Running on PORT: ${PORT}`)
})

