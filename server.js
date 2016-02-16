#!/bin/env node
var express = require('express');
var app = express();

/* serves main page */
app.get("/", function(req, res) {
   res.sendfile('index.html')
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){
    res.sendfile( __dirname + req.params[0]);
});


app.listen(process.env.OPENSHIFT_NODEJS_PORT || 80, process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1', function() {

});
