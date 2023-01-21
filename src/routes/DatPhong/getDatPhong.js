const express = require('express');

const { getDatPhong } = require('../../controllers/DatPhong/getDatPhong');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/get-dat-phong
//get
userRoute.get("/get-dat-phong", verifyToken, getDatPhong)
module.exports = userRoute;
