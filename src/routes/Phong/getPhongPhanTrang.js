const express = require('express');

const { getPhongPhanTrang } = require('../../controllers/Phong/getPhongPhanTrang');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/get-phong-thue/phan-trang?{pageIndex}?{pageSize}?{keyWord}
//get
userRoute.get("/get-phong-thue/phan-trang/:pageIndex/:pageSize", verifyToken, getPhongPhanTrang)
module.exports = userRoute;
