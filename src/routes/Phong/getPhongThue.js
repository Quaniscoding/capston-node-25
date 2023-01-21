const express = require('express');

const { getPhongThue } = require('../../controllers/Phong/getPhongThue');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/get-phong-thue
//get
userRoute.get("/get-phong-thue", verifyToken, getPhongThue)
module.exports = userRoute;
