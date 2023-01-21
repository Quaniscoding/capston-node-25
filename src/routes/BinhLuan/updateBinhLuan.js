const express = require('express');

const { updateBinhLuan } = require('../../controllers/BinhLuan/updateBinhLuan');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/update-binh-luan/{id}
//put
userRoute.put("/update-binh-luan/:id", verifyToken, updateBinhLuan)
module.exports = userRoute;
