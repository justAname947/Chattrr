const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', function (event) {
    console.log('Cleint: Connected to wss');    
});

socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});

const sendMessage = () => {
    console.log('sent to server!');
    socket.send("message from cleint");
}