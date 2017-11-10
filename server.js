var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("hello jenkins");
  });

app.listen(4000);
console.log("port is running 4000");