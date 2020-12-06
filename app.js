var express = require('express');
var app= express();

app.get('/', function(req,res)
{
    res.sendFile(__dirname + '/index.html');
});
app.get('/registration', function(req,res)
{
    res.sendFile(__dirname + '/registration.html');
})

app.get('/welcome', function(req,res)
{
    res.sendFile(__dirname + '/welcome.html');
})

app.listen('5000', ()=>
{
    console.log("SERVER IS ON PORT 5000");
})