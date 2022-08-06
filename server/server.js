const express = require('express');
const cors = require('cors');
const app = express();



const port = 8080;
app.use(cors());
app.get('/',function(req,res){
res.send('Hi there')
})

app.use(express.json());

app.post('/data',function(req,res){
console.log(req.body);
    res.send('Your details have been submitted')
})


app.listen(port,function(){
    console.log('listening to server')
})