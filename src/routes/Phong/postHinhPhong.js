const express = require('express');
const { postHinhPhong } = require('../../controllers/Phong/postHinhPhong');
const { verifyToken } = require('../../middlewares/baseToken');
const { upload } = require('../../middlewares/upload');

const userRoute = express.Router();
//http://localhost:8080/api/upload-hinh-phong/{id}
//put
userRoute.put("/upload-hinh/:id", upload.single("dataUpload"), verifyToken, postHinhPhong)
module.exports = userRoute;
