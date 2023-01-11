const express = require('express');

const { getDatPhongTheoNguoiDung } = require('../../controllers/DatPhong/getDatPhongTheoNguoiDung');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/dat-phong/{idNguoiDung}
//get
userRoute.get("/dat-phong/lay-theo-nguoi-dung/:idNguoiDung", verifyToken, getDatPhongTheoNguoiDung)
module.exports = userRoute;
