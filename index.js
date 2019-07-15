var express= require('express');
var socket=require('socket.io');

//App setup
var app=express();

//creating a server

var server= app.listen(4000,()=>{
    console.log('listening to port 4000');
})

//static files
app.use(express.static('public'))

//socket setup

var io=socket(server);  

/*socket is a function
 which takes in a parameter -the server w hich
  we wont to work with,which in this case is server that we created */

io.on('connection',(socket)=>{
    console.log('socket connection established')
})
//if 10 different clients want to make a connection each one will have a different socket