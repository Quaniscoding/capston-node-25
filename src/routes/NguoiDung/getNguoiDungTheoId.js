const express = require('express');

const { getNguoiDungTheoId } = require('../../controllers/NguoiDung/getNguoiDungId');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/get-nguoi-dung-id/{id}
//get
userRoute.get("/get-nguoi-dung-id/:id", verifyToken, getNguoiDungTheoId)
module.exports = userRoute;
