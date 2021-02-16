 var sellersController = require('./controllers/sellersController');
// var usersController=require('./controllers/usersController');
var express = require('express');
var app = express();

var mongoose = require('mongoose');


var port = process.env.PORT || 3000; 
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
 mongoose.connect('mongodb+srv://<userName>:<password>@amazonclone.qg5vp.mongodb.net/<dbName>');
 sellersController(app);




app.listen(3000,()=>console.log("server started at port 3000"));