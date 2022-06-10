const http = require("http")
const server = http.createServer ((request,response)=>{
    const url = request.url
    if (url === "/"){
        response.write("<html>")
        response.write("<head><title>Users</title></head>")
        response.write("<body>")
        response.write("<h1>Ingresar nombre de usuario</h1><form action='/bienvenida' method='POST'><input type='text' name='usuario'><button type='submit'>Enviar</button></form>")
        response.write("</body>")
        response.write("</html>")
        return response.end()
    }
    if (url === "/usuarios"){
        response.write("<html>")
        response.write("<head><title>Usuarios</title></head>")
        response.write("<body>")
        response.write("<ul><li>Lautaro Dominguez</li><li>Leandro Emma</li><li>Alexia Freire</li></ul>")
        response.write("</body>")
        response.write("</html>")
        return response.end()
    }
    if (url === "/bienvenida"){
        response.write("<html>")
        response.write("<head><title>Bienvenida</title></head>")
        response.write("<body>")
        response.write("<h1>Bienvenido a APV 2022</h1>")
        response.write("</body>")
        response.write("</html>")
        return response.end()
    }
})

server.listen(3000)