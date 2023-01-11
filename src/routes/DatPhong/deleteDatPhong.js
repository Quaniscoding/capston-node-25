const express = require('express');

const { deleteDatPhong } = require('../../controllers/DatPhong/deleteDatPhong');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/dat-phong/{id}
//delete
userRoute.delete("/dat-phong/:id", verifyToken, deleteDatPhong)
module.exports = userRoute;
