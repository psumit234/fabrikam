var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");

app.use(express.static(path.join(__dirname,'public')));
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+"/index.html"));
});


var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at port 8081");
})