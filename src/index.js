const express = require('C:\\Users\\swastik.mukherjee\\AppData\\Roaming\\npm\\node_modules\\express');
const mongoose = require('C:\\Users\\swastik.mukherjee\\AppData\\Roaming\\npm\\node_modules\\mongoose');
const cors = require('cors')
const app = express();
const fs = require('fs');
const path = require('path');

const {User, validate} = require('../model/users.js');

//connect to mongoDb with mongoose package

mongoose.connect('mongodb+srv://swastik:Sondesh@cluster0-uc9uk.mongodb.net/newsAgg?retryWrites=true&w=majority')
.then(() => console.log('Connected to mongoDB...'))
.catch((error) => console.log(console.error(error)));


//express middleware to parse json data
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));


app.get('/' , (rea , res) => {
    res.sendFile('./main.html', {root: __dirname })
})

//Create user
app.options('/user', (req, res) => {

var headers = {};
headers["Access-Control-Allow-Origin"] = "*";
headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
headers["Access-Control-Allow-Credentials"] = false;
headers["Access-Control-Max-Age"] = '86400'; // 24 hours
headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization, cache-control";
headers['Content-Type'] = 'text/html';
res.writeHead(200, headers);
res.end();
});
// the browser checks for these header data if calls like put delete calls come from browser

app.post('/user', async (req, res) => {

const {error} = validate(req.body);

if (error) {
return res.status(400).send(error.details[0].message);
}
let user = await User.findOne({userId : req.body.userId});
if(user) return res.status(400).send("User already registered");

let newUser = new User (
    {
        userId : req.body.userId,
        password : req.body.password
    }
);

newUser = await newUser.save();

res.redirect('/logged');

}

);

app.get('/logged' , function(req, res){


res.writeHead(302 , {
           'Location' : './loggedon.html' // This is your url which you want
        });
res.end();

});




const port = process.env.PORT || 3000;

app.listen(port , () => console.log(`Listening to port ${port}`));



