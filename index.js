const express = require('express')
const app = express();
const hbs = require('hbs');
app.set('view engine', 'hbs');

app.get('/',function (req,res){
    res.render('inicio',{
        titulo: "Bienvenido",
        msj:"Aprendiendo a hacer páginas dinámicas con NodeJS"
    })
})

app.get('/contacto',function (req,res){
    res.render('contacto',{
        titulo: "Contacto",
        msj:"lautaro.e.dominguez@gmail.com"
    })
})

app.listen(3000)
                        