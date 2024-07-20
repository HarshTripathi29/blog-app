const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const secret = 'harsh'

const app = express();

app.use(cors({
    credentials:true,
    origin : 'http://localhost:5173'
}));

app.use(express.json()); // Middleware to parse JSON request body

mongoose.connect('mongodb+srv://harshtripathi042:harsh123@cluster0.etqbz6r.mongodb.net/blog');

app.get('/', function(req, res){
    res.json('connected');
});

app.post('/register', async function(req, res){ // Changed to POST method
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        const userDoc = await User.create({
            username,
            password,
        });

        res.json(userDoc);
    } catch(e) {
        console.log(e);
        res.status(400).json(e);
    }
});


app.post('/login',async function(req, res){
    const {username, password} = req.body;

    const userDoc = await User.findOne({username, password});

    if(userDoc){
        jwt.sign({username, id:userDoc._id}, secret, {}, (err, token)=>{
            if (err) throw err;
            res.cookie('token',token).json('ok');
        });
    }else{
        res.status(400).json('wrong Credential');
    }
});


app.listen(5000, () => {
    console.log('server running at port 5000');
});
