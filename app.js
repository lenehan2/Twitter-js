var express = require('express');
var app = express();

var port = 3000;

app.use(function(req,res,next){
	console.log("Request verb: " + req.method)
	console.log("Response Status Code: "+ res.statusCode)
	next();
});

app.get("/",function(req,res){
	res.send("This is the home site");
	//console.log("this is the home site");
});




app.listen(port,function(){
	console.log("Listening on port " + port);
});