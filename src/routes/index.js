const express = require('express');
const signIn = require('./Auth/signUp');
const signUp = require('./Auth/signIn');
const binhLuan = require('./BinhLuan/getBinhLuan');
const postBinhLuan = require('./BinhLuan/postBinhLuan');
const updateBinhLuan = require('./BinhLuan/updateBinhLuan');
const deleteBinhLuan = require('./BinhLuan/deleteBinhLuan');
const getBinhLuanTheoMaPhong = require('./BinhLuan/getBinhLuanTheoMaPhong');
const rootRoute = express.Router();
//auth
rootRoute.use("/auth", signUp);
rootRoute.use("/auth", signIn);
//binhLuan
rootRoute.use("", binhLuan);
rootRoute.use("", postBinhLuan);
rootRoute.use("", updateBinhLuan);
rootRoute.use("", deleteBinhLuan);
rootRoute.use("", getBinhLuanTheoMaPhong);
module.exports = rootRoute;
