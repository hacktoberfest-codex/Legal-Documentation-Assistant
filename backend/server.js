const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors');

// const {login, register}  = require('./resolvers/users.js');
// const {checkAuth} = require('./util/auth-validator.js');

//TODO: 1. Create login function and register function
//      2. Create auth validator function

const JWT_SECRET = process.env.SECRET_KEY;

const app = express();
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log(`Successfully connected to the database`)
        return app.listen(process.env.PORT);
    })
    .then((res) => {
        console.log(`Server running on port ${process.env.PORT}`);
    });

    app.post('/api/login', async (req, res) => {
        login(req, res);
    });
    
    app.post('/api/register', async (req, res) => {
        register(req, res);
    });