const express=require('express');
const db = require('./models')

const app = express();


app.get('/', function(req, res){
    res.send(`Home Stub`)
})





app.listen(3000, () => console.log(`🎧 You're listening to Port 3000`))