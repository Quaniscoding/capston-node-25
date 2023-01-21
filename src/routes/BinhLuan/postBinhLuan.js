const express = require('express');

const { postBinhLuan } = require('../../controllers/BinhLuan/postBinhLuan');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/post-binh-luan
//post
userRoute.post("/post-binh-luan", verifyToken, postBinhLuan)
module.exports = userRoute;
