var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors());
app.listen(5000);

app.get("/getData",function(req,res){
    res.send('{"id":3 , "qty":300 }')
})