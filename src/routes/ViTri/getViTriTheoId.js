const express = require('express');

const { getViTriTheoId } = require('../../controllers/ViTri/getViTriTheoId');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/get-vi-tri-id/{id}
//get
userRoute.get("/get-vi-tri-id/:id", verifyToken, getViTriTheoId)
module.exports = userRoute;