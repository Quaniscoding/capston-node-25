const express = require('express');

const { postViTri } = require('../../controllers/ViTri/postViTri');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/post-vi-tri
//post
userRoute.post("/post-vi-tri", verifyToken, postViTri)
module.exports = userRoute;
