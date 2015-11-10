var swig = require('swig')
var express = require('express')
var router = express.Router();

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


module.exports = router;

