const express = require('express')
const app = express() 

app.use(function(req,res,next){
    console.log("“Ejecutando middleware”")
    next()
})

app.listen(3000)