const express = require('express');

const { getNguoiDungPhanTrang } = require('../../controllers/NguoiDung/getNguoiDungPhanTrang');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/get-nguoi-dung/phan-trang?{pageIndex}/{pageSize}/{keyWord}
//get
userRoute.get("/get-nguoi-dung/phan-trang/:pageIndex/:pageSize", verifyToken, getNguoiDungPhanTrang)
module.exports = userRoute;
