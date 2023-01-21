const express = require('express');

const { searchNguoiDung } = require('../../controllers/NguoiDung/searchNguoiDung');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/nguoi-dung/{tenNguoiDung}
//get
userRoute.get("/get-nguoi-dung/search/:tenNguoiDung", verifyToken, searchNguoiDung)
module.exports = userRoute;
