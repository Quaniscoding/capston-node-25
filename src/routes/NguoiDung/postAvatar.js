const express = require('express');
const { postAvatar } = require('../../controllers/NguoiDung/postAvatar');
const { verifyToken } = require('../../middlewares/baseToken');
const { upload } = require('../../middlewares/upload');

const userRoute = express.Router();
//http://localhost:8080/api/upload-avatar?id=
//put
userRoute.put("/upload-avatar", upload.single("dataUpload"), verifyToken, postAvatar)
module.exports = userRoute;
