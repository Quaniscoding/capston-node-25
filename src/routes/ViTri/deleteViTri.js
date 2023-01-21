const express = require('express');

const { deleteViTri } = require('../../controllers/ViTri/deleteViTri');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/delete-vi-tri/{id}
//delete
userRoute.delete("/delete-vi-tri/:id", verifyToken, deleteViTri)
module.exports = userRoute;
