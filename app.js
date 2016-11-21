var express = require('express');

var app = exprss();


//set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));
