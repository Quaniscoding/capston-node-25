const express = require('express');

const { updateNguoiDung } = require('../../controllers/NguoiDung/updateNguoiDung');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/update-nguoi-dung/{id}
//put
userRoute.put("/update-nguoi-dung/:id", verifyToken, updateNguoiDung)
module.exports = userRoute;
