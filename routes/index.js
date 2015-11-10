var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');



// static file middleware


router.use(function(req,res,next){
	console.log("Request verb: " + req.method)
	console.log("Response Status Code: "+ res.statusCode)
	//console.log(tweetBank.list())
	next();
});

router.get('/users/:name/tweets/:id',function(req,res){
	var userName = (req.params.name);
	var userTweets = tweetBank.find({name: userName})
	var tweetId = parseInt(req.params.id);
	var specificTweet = tweetBank.find({id: tweetId});

	console.log(tweetId);
	res.render("index",{title: 'Twitter.js - Posts by ' + userName,tweets: specificTweet});
	
});

router.get('/users/:name',function(req,res){
	var userName = (req.params.name);
	var userTweets = tweetBank.find({name: userName})
	//console.log(userTweets)
	res.render("index",{title: 'Twitter.js - Posts by ' + userName,tweets: userTweets});

	
});

router.get('/',function(req,res){
	var tweets = tweetBank.list();
	res.render('index', {title: "Twitter.js",tweets: tweets});

//{title: 'Twitter.js', tweets: tweets}
});

router.get('/post',function(req,res){


	
})




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