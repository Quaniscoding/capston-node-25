const express = require('express');

const { deleteNguoiDung } = require('../../controllers/NguoiDung/deleteNguoiDung');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/delete-nguoi-dung/{id}
//delete
userRoute.delete("/delete-nguoi-dung/:id", verifyToken, deleteNguoiDung)
module.exports = userRoute;
