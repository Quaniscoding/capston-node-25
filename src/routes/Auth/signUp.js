const express = require('express');
const { signUp } = require('../../controllers/Auth/signUp');
const userRoute = express.Router();

//http://localhost:8080/api/auth/signup
//post
userRoute.post("/signup", signUp)
module.exports = userRoute;
