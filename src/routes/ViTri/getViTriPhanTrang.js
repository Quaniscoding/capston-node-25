const express = require('express');

const { getViTriPhanTrang } = require('../../controllers/ViTri/getViTriPhanTrang');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/vi-tri/phan-trang-tim-kiem?{pageIndex}?{pageSize}?{keyWord}
//get
userRoute.get("/vi-tri/phan-trang-tim-kiem", verifyToken, getViTriPhanTrang)
module.exports = userRoute;
