const express = require ('express')
const app = express()
const mysql = require('mysql')
const hbs=require('hbs')
const { resolveObjectURL } = require('buffer')

app.set('view engine', 'hbs')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'DESAFIO'
})

db.connect((err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log('conexión exitosa')
    }
})

app.get('/', (req,res)=>{
    db.query('SELECT * FROM Estudiantes', (err, rows)=>{
        if(!err){
            res.render('inicio',{
                titulo: 'Estudiantes',
                mensaje: JSON.stringify(rows)
        })}
        else{
            console.log(err)
        }
    })
    
})

app.listen('3000', ()=> console.log('Coectado en el puerto 3000'))