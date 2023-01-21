const express = require('express');

const { deletePhongThue } = require('../../controllers/phong/deletePhongThue');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/delete-phong-thue/{id}
//delete
userRoute.delete("/delete-phong-thue/:id", verifyToken, deletePhongThue)
module.exports = userRoute;
