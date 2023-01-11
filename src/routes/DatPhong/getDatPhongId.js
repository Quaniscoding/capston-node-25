const express = require('express');

const { getDatPhongTheoId } = require('../../controllers/DatPhong/getDatPhongTheoId');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/dat-phong/{id}
//get
userRoute.get("/dat-phong/:id", verifyToken, getDatPhongTheoId)
module.exports = userRoute;
