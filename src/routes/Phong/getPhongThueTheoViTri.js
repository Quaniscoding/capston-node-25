const express = require('express');

const { getPhongThueTheoViTri } = require('../../controllers/Phong/getPhongTheoViTri');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/get-phong-thue/lay-phong-theo-vi-tri/{id}
//get
userRoute.get("/get-phong-thue/lay-phong-theo-vi-tri/:id", verifyToken, getPhongThueTheoViTri)
module.exports = userRoute;
