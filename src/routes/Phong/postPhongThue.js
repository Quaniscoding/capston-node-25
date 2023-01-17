const express = require('express');

const { postPhongThue } = require('../../controllers/Phong/postPhongThue');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/phong-thue
//post
userRoute.post("/phong-thue", verifyToken, postPhongThue)
module.exports = userRoute;
