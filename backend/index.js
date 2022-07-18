require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

//ROUTES
app.get('/', function(req, res){
    res.send('Hello world')
})

//WILDCARD ERROR
app.get('*', (req, res) => {
    res.send('404')
})

app.listen(PORT)
