const express = require('express');
const { signIn } = require('../../controllers/Auth/signIn');
const userRoute = express.Router();

//http://localhost:8080/api/auth/signin
//post
userRoute.post("/signin", signIn)
module.exports = userRoute;
