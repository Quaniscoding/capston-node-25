const express = require('express');

const { getNguoiDungPhanTrang } = require('../../controllers/NguoiDung/getNguoiDungPhanTrang');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/nguoi-dung/phan-trang-tim-kiem?{pageIndex}/{pageSize}/{keyWord}
//get
userRoute.get("/nguoi-dung/phan-trang-tim-kiem", verifyToken, getNguoiDungPhanTrang)
module.exports = userRoute;
