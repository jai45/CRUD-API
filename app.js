var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/customer');

mongoose.connection.on('connected',()=>{
    console.log('connected to database mongodb @ 27017');
});

mongoose.connection.on('err',()=>{
    if(err)
    {
        console.log('Error in database connection: '+err);
    }
});

const port = 3000;

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')))

app.use('/api',route);

app.get('/',(req,res)=>{
    res.send("foobar")
})

app.listen(port,()=>{
    console.log('server started at port '+port);
});
