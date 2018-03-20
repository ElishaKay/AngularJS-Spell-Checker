var bodyParser = require('body-parser');
var urlencodedparser = bodyParser.urlencoded({extended:false});

const express = require('express');
const app = express();
var path = require("path");


app.use(express.static(path.join(__dirname, 'Client')));

app.get('/',function(req,res){
			  res.render('index.html');   
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));