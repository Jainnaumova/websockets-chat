const express = require('express')
const socket = require('socket.io')
const app = express()

app.use(express.static("public"))

const server = app.listen(1234, function(){
  console.log("Partying on port 1234")
})

// socket setup
// listens for the server
var io = socket(server)

io.on("connection", (socket) => {
  console.log("made socket connection", socket.id)
// receved message from the client side
  socket.on("chat", (data)=>{
    // io.sockets <- reffers to all the sockets in the chat-room
    io.sockets.emit("chat", data)
  })

  socket.on('disconnect', (socket)=>{
    console.log("disconnected", socket.id)
  })
  // socket.on("color", (color)=>{
  //   // io.sockets <- reffers to all the sockets in the chat-room
  //   io.sockets.emit("color", color)
  // })
})
