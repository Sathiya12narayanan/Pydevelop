var ws = new WebSocket("ws://localhost:5000");

ws.onopen = function() {
    console.log("WebSocket connection opened");
    ws.send("Hello from the client!");
};

ws.onmessage = function(event) {
    console.log("Received from server: " + event.data);
    var messageInput = document.getElementById("messageInput");
    messageInput.value = event.data;
};

function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value;
    ws.send(message);
    messageInput.value = "";
}