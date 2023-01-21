const express = require('express');

const { updatePhongThue } = require('../../controllers/Phong/updatePhongThue');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/update-phong-thue/{id}
//put
userRoute.put("/update-phong-thue/:id", verifyToken, updatePhongThue)
module.exports = userRoute;
