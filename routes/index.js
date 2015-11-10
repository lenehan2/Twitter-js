var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');



// static file middleware


router.use(function(req,res,next){
	console.log("Request verb: " + req.method)
	console.log("Response Status Code: "+ res.statusCode)
	next();
});

router.get('/',function(req,res){
	var tweets = tweetBank.list();
	res.render('index', {title: "Twitter.js",tweets: tweets});

//{title: 'Twitter.js', tweets: tweets}
});



// router.get("/",function(req,res){
// 	var testObj = {

// 	title: "An Example",
// 	people: [{age: 54, name: "Gandalf"},{name: "Frodo"},{name: "Hermione"}]
// 	}
// 	res.render("index", testObj, function(err,output){
// 			if(err) throw err;
// 			res.send(output);
// 		});
// });

module.exports = router;