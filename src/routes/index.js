const express = require('express');
const signIn = require('./Auth/signUp');
const signUp = require('./Auth/signIn');
const binhLuan = require('./BinhLuan/getBinhLuan');
const postBinhLuan = require('./BinhLuan/postBinhLuan');
const updateBinhLuan = require('./BinhLuan/updateBinhLuan');
const deleteBinhLuan = require('./BinhLuan/deleteBinhLuan');
const getBinhLuanTheoMaPhong = require('./BinhLuan/getBinhLuanTheoMaPhong');
const getDatPhong = require('./DatPhong/getDatPhong')
const getDatPhongId = require('./DatPhong/getDatPhongId')
const postDatPhong = require('./DatPhong/postDatPhong')
const updateDatPhong = require('./DatPhong/updateDatPhong')
const deleteDatPhong = require('./DatPhong/deleteDatPhong')
const getDatPhongTheoNguoiDung = require('./DatPhong/getDatPhongTheoNguoiDung')
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
//DatPhong
rootRoute.use("", getDatPhong)
rootRoute.use("", getDatPhongId)
rootRoute.use("", postDatPhong)
rootRoute.use("", updateDatPhong)
rootRoute.use("", deleteDatPhong)
rootRoute.use("", getDatPhongTheoNguoiDung)
module.exports = rootRoute;
