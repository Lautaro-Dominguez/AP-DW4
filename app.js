const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.use(express.urlencoded({
    extended: true
    }))

app.get('/',(req,res)=>{
    res.send(
        `<h1>Completá con tus datos</h1>
        <form action='/datosguardados' method='POST'>
        <p>Nombre</p><input type='text' name='dato1'>
        <p>Apellido</p><input type='text' name='dato2'>
        <p>E-Mail</p><input type='text' name='dato3'>
        <p>Mensaje</p><input type='text' name='dato4'>
        <button type='submit'>Enviar</button></form>`
    )
})

app.post('/datosguardados',(req,res)=>{
    res.send(
        `<h1>Gracias</h1>
        <p>Tu información se almacenó satisfactoriamente</p>`
    )
    const nombre=req.body.dato1
    const apellido=req.body.dato2
    const email=req.body.dato3
    const msj=req.body.dato4

    fs.appendFile('datos.txt','Nombre:'+nombre+ ' Apellido: '+apellido+' E-Mail: '+email+' Mensaje: '+msj,()=>{
        console.log('Almacenado en datos.txt')
    })
})

app.listen(port)