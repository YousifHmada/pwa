const express = require('express');

var app = new express();

app.use(express.static('public'));

var port = process.env.PORT || 4200;

app.listen(port,()=>{
	console.log('server is running');
})