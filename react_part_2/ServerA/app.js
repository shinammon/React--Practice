var express = require("express");
var app = express();
app.use(express.static("public"))
app.listen(3000);

app.get("/getData",function(req,res){
    res.send('{"id":2 , "qty":100 }')
})