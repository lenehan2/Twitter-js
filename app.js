var express = require('express');
var app = express();
var swig = require('swig')

var port = 3000;

//take out this line after completion for better performance
swig.setDefaults({ cache: false });

app.engine('html', swig.renderFile);
app.set('view engine', "html" );
app.set('views', __dirname + "/views");
app.use(function(req,res,next){
	console.log("Request verb: " + req.method)
	console.log("Response Status Code: "+ res.statusCode)
	next();
});

app.get("/",function(req,res){
	var testObj = {

	title: "An Example",
	people: [{age: 54, name: "Gandalf"},{name: "Frodo"},{name: "Hermione"}]
	}
	res.render("index", testObj, function(err,output){
			if(err) throw err;
			res.send(output);
		});
});

app.listen(port,function(){
	console.log("Listening on port " + port);
});

