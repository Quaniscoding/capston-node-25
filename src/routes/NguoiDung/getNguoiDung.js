const express = require('express');

const { getNguoiDung } = require('../../controllers/NguoiDung/getNguoDung');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/get-nguoi-dung
//get
userRoute.get("/get-nguoi-dung", verifyToken, getNguoiDung)
module.exports = userRoute;
