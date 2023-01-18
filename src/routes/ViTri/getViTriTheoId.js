const express = require('express');

const { getViTriTheoId } = require('../../controllers/ViTri/getViTriTheoId');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/vi-tri/{id}
//get
userRoute.get("/vi-tri/:id", verifyToken, getViTriTheoId)
module.exports = userRoute;