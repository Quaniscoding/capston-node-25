const express = require('express');

const { updateViTri } = require('../../controllers/ViTri/updateViTri');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

//http://localhost:8080/api/vi-tri/{id}
//put
userRoute.put("/update-vi-tri/:id", verifyToken, updateViTri)
module.exports = userRoute;
