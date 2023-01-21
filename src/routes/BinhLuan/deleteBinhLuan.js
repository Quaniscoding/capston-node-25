const express = require('express');

const { deleteBinhLuan } = require('../../controllers/BinhLuan/deleteBinhLuan');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/delete-binh-luan/{id}
//delete
userRoute.delete("/delete-binh-luan/:id", verifyToken, deleteBinhLuan)
module.exports = userRoute;
