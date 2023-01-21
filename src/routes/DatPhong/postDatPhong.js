const express = require('express');

const { postDatPhong } = require('../../controllers/DatPhong/postDatPhong');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/post-dat-phong
//post
userRoute.post("/post-dat-phong", verifyToken, postDatPhong)
module.exports = userRoute;
