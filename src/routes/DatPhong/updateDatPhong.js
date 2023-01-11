const express = require('express');

const { updateDatPhong } = require('../../controllers/DatPhong/updateDatPhong');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/dat-phong/{id}
//put
userRoute.put("/dat-phong/:id", verifyToken, updateDatPhong)
module.exports = userRoute;
