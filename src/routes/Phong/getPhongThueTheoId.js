const express = require('express');

const { getPhongThueTheoId } = require('../../controllers/Phong/getPhongThueTheoId');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/get-phong-thue-id/{id}
//get
userRoute.get("/get-phong-thue-id/:id", verifyToken, getPhongThueTheoId)
module.exports = userRoute;
