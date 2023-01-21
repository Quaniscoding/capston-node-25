const express = require('express');

const { getDatPhongTheoId } = require('../../controllers/DatPhong/getDatPhongTheoId');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/get-dat-phong-id/{id}
//get
userRoute.get("/get-dat-phong-id/:id", verifyToken, getDatPhongTheoId)
module.exports = userRoute;
