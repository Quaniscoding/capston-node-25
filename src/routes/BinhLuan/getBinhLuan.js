const express = require('express');

const { binhLuan } = require('../../controllers/BinhLuan/getBinhLuan');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/binh-luan
//get
userRoute.get("/get-binh-luan", verifyToken, binhLuan)
module.exports = userRoute;
