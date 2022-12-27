const express = require('express');
const { getBinhLuanTheoMaPhong } = require('../../controllers/BinhLuan/getBinhLuanTheoMaPhong');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/binh-luan/{MaPhong}
//get
userRoute.get("/binh-luan/:maPhong", verifyToken, getBinhLuanTheoMaPhong)
module.exports = userRoute;
