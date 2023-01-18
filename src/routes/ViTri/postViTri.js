const express = require('express');

const { postViTri } = require('../../controllers/ViTri/postViTri');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/vi-tri
//post
userRoute.post("/vi-tri", verifyToken, postViTri)
module.exports = userRoute;
