const express = require('express');
const chalk = require('chalk');

const port = 3000;

const app = express();

app.get('/', (req, res)=>{
    //codigo interno del endpoint
    console.log(chalk.blue.bgYellowBright.bold(` GET -> http://localhost:${port} `));
    console.log("-----OBJETO REQUEST-----");
    console.log(req)
    console.log("-----METODO DEL REQUEST-----");
    console.log(req.method)
    console.log("-----URL DEL REQUEST-----");
    console.log(req.url)
    
    //información para el cliente
    res.send("Bienvenido a la app. 😎")
});

app.get('/nuevo-endpoint', (req, res)=>{
    //codigo interno del endpoint
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    console.log(chalk.white.bgBlueBright.bold(` GET -> http://localhost:${port}/nuevo-endpoint `));
    console.log(chalk.black.bgGreenBright(`Horario ${hora}:${minutos} hs`));
    
    //información para el cliente
    res.send("Vista para nuevo endpoint.")
});

app.listen(port, ()=>{
    console.log(chalk.blackBright.bgWhite.bold(` Aplicación escuchando en http://localhost:${port} `));
});