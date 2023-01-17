const express = require('express');

const { postNguoiDung } = require('../../controllers/NguoiDung/postNguoiDung');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/nguoi-dung
//post
userRoute.post("/nguoi-dung", verifyToken, postNguoiDung)
module.exports = userRoute;
