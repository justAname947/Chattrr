const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);

//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

const WebSocket = require('ws');

const wss = new WebSocket.Server({server});

wss.on('connection', (ws) => {
    //this happens only on initial connection
    console.log("Server: A new connection was made to the server");
    ws.send('Welcome Cleint!');

    ws.on('message', (message) => {
        console.log(message);
    });
});




const PORT = process.env.PORT || 3000;

//app.get('/', (req, res)=> res.send('Connected to \'/\' successfuly.'))

server.listen(PORT, ()=>console.log(`Server running on server ${PORT}`));
