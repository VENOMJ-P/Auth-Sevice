const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');

const app=express();

const serverConfigSetup = (req,res) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.listen(PORT,(req,re)=>{
        console.log(`Server started at ${PORT}`);
    })
}

serverConfigSetup();