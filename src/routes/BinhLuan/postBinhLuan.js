const express = require('express');

const { postBinhLuan } = require('../../controllers/BinhLuan/postBinhLuan');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/binh-luan
//post
userRoute.post("/binh-luan", verifyToken, postBinhLuan)
module.exports = userRoute;
