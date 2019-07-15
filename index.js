var express= require('express');


//App setup
var app=express();

//creating a server

var server= app.listen(4000,()=>{
    console.log('listening to port 4000');
})

//static files
app.use(express.static('public'))