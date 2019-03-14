// make connection from the client side
var socket = io.connect('http://localhost:1234');
var color = 'blue'

// emit message from the client to the server
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      btnColor = document.getElementById("changeColor");

// emit the event (don't forget to handle this message on the server)
btn.addEventListener("click", ()=>{
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  }, color)
})

btnColor.addEventListener("click", ()=>{
  socket.emit('color', color)
})

// Listen for events and handle data from the server
socket.on('chat', (data)=>{
  output.innerHTML += '<p><strong>' + data.handle + ": <strong>" + data.message + "</p>"
})

socket.on('color', (color)=>{
  document.body.style.backgroundColor = color;
})
