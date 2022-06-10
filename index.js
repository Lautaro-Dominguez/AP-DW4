const express=require('express')
const app=express()
const http=require('http')
const server = http.createServer(app)
const { Server }=require('socket.io')
const io= new Server(server)
const port=3000

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

io.on('connection',(socket)=>{
    console.log('Un nuevo usuario se ha conectado')
    socket.on('disconnect',()=>{
        console.log('Usuario desconectado')
    })

})

server.listen(port)