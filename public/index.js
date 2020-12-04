const socket = new WebSocket('ws://localhost:3000');

var username = prompt("Please enter your name");

document.getElementById('username').innerHTML=username;

// This happens when the connection is first established
socket.addEventListener('open', function (event) {
    console.log('Cleint: Connected to wss');    
});
// This adds an event listener to the form of the type submit
document.getElementById('send-form').addEventListener('submit', e => {
    // This prevents it from reloading
    e.preventDefault();
    broadcastMessage();
})

socket.addEventListener('message', (event) => {
    //console.log(event.data);
    insertMessage(event.data);
});

const broadcastMessage = () => {
    //message value of inputfield
    let message = document.getElementById('inputfield').value;
    //create an element p
    let p = document.createElement('p');
    //create a text node to add to p
    let textnode = document.createTextNode(`${username}: ${message}`);
    //connect them together 
    p.appendChild(textnode);
    //select the element in DOM where to you want to append it
    let chatContainer = document.getElementById('chat-container');
    // append the para to the element in DOM that youve selected 
    chatContainer.appendChild(p);
    //clear the value of the input field for new messages
    document.getElementById('inputfield').value = '';
    // send the message back to the server for broachcasting
    socket.send(`${username}: ${message}`);
}

const insertMessage = (message) => {
    //create an element p
    let p = document.createElement('p');
    //create a text node to add to p
    let textnode = document.createTextNode(message);
    //connect them together 
    p.appendChild(textnode);
    //select the element in DOM where to you want to append it
    let chatContainer = document.getElementById('chat-container');
    // append the para to the element in DOM that youve selected 
    chatContainer.appendChild(p);
    //clear the value of the input field for new messages
    document.getElementById('inputfield').value = '';
}