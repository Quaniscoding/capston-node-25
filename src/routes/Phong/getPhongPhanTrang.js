const express = require('express');

const { getPhongPhanTrang } = require('../../controllers/Phong/getPhongPhanTrang');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/phong-thue/phan-trang-tim-kiem?{pageIndex}?{pageSize}?{keyWord}
//get
userRoute.get("/phong-thue/phan-trang-tim-kiem", verifyToken, getPhongPhanTrang)
module.exports = userRoute;
