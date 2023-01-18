const express = require('express');

const { getPhongThueTheoId } = require('../../controllers/Phong/getPhongThueTheoId');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/phong-thue/{id}
//get
userRoute.get("/phong-thue/:id", verifyToken, getPhongThueTheoId)
module.exports = userRoute;
