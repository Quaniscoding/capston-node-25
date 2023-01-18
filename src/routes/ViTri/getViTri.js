const express = require('express');

const { getViTri } = require('../../controllers/ViTri/getViTri');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/vi-tri
//get
userRoute.get("/vi-tri", verifyToken, getViTri)
module.exports = userRoute;
