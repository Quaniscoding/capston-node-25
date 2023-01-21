const express = require('express');

const { getViTriPhanTrang } = require('../../controllers/ViTri/getViTriPhanTrang');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/get-vi-tri/phan-trang/:pageIndex/:pageSize?{keyword}
//get
userRoute.get("/get-vi-tri/phan-trang/:pageIndex/:pageSize", verifyToken, getViTriPhanTrang)
module.exports = userRoute;
