var express = require('express')
var app = express();
var port = 3000;
var swig = require('swig')
var routes = require('./routes/');
var mime = require('mime');
var fs = require('fs')


app.engine('html', swig.renderFile);
app.set('view engine', "html" );
app.set('views', __dirname + "/views");

//take out this line after completion for better performance
swig.setDefaults({ cache: false });

//Index Route//


app.use(function(req, res, next) {
  console.log(req.path)
  var mimeType = mime.lookup(req.path)
  fs.readFile('./public/' + req.path, function(err, fileBuffer) {
    if(err) return next()
    res.header('Content-Type', mimeType)
    res.send(fileBuffer)
  })
})

app.use('/',routes);


app.listen(port,function(){
	console.log("Listening on port " + port);
});

