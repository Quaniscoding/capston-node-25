const express = require('express');
const { postHinhViTri } = require('../../controllers/ViTri/postHinhViTri');
const { verifyToken } = require('../../middlewares/baseToken');
const { upload } = require('../../middlewares/upload');

const userRoute = express.Router();
//http://localhost:8080/api/post-hinh-vi-tri/{id}
//put
userRoute.put("/post-hinh-vi-tri/:id", upload.single("dataUpload"), verifyToken, postHinhViTri)
module.exports = userRoute;
