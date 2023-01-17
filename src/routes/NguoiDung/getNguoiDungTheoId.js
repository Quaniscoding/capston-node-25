const express = require('express');

const { getNguoiDungTheoId } = require('../../controllers/NguoiDung/getNguoiDungId');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/nguoi-dung/{id}
//get
userRoute.get("/nguoi-dung/:id", verifyToken, getNguoiDungTheoId)
module.exports = userRoute;
