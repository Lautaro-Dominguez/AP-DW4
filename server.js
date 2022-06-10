const express = require ('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'nodeapsql'
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
    db.query('SELECT * FROM tienda', (err, rows)=>{
        if(!err){
            console.log(rows)
        }
        else{
            console.log(err)
        }
    })
})

app.listen('3000', ()=> console.log('Coectado en el puerto 3000'))