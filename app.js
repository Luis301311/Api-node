require('dotenv').config();
const express =require('express');
const bodyParser = require('body-parser'); 
const {databaseService} = require('./services/databaseService');
const {PORT} = require('./config')

const app = express();  

app.use(bodyParser.json());



require('./routes')(app, databaseService());

app.listen(PORT,function(){
    console.log("Escuchando puerto", PORT);
});

