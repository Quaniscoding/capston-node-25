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
const getNguoiDung = require('./NguoiDung/getNguoiDung')
const postNguoiDung = require('./NguoiDung/postNguoiDung')
const deleteNguoiDung = require('./NguoiDung/deleteNguoiDung')
const getNguoiDungPhanTrang = require('./NguoiDung/getNguoiDungPhanTrang')
const getNguoiDungTheoId = require('./NguoiDung/getNguoiDungTheoId')
const updateNguoiDung = require('./NguoiDung/updateNguoiDung')
const searchNguoiDung = require('./NguoiDung/searchNguoiDung')
const postAvatar = require('./NguoiDung/postAvatar')
const getPhongThue = require('./Phong/getPhongThue')
const getPhongThueTheoViTri = require('./Phong/getPhongThueTheoViTri')
const getPhongPhanTrang = require('./Phong/getPhongPhanTrang')
const postPhongThue = require('./Phong/postPhongThue')
const getPhongThueTheoId = require('./Phong/getPhongThueTheoId')
const updatePhongThue = require('./Phong/updatePhongThue')
const deletePhongThue = require('./Phong/deletePhongThue')
const postHinhPhong = require('./Phong/postHinhPhong')
const getViTri = require('./ViTri/getViTri')
const postViTri = require('./ViTri/postViTri')
const getViTriTheoId = require('./ViTri/getViTriTheoId')
const getViTriPhanTrang = require('./ViTri/getViTriPhanTrang')
const updateViTri = require('./ViTri/updateViTri')
const deleteViTri = require('./ViTri/deleteViTri')
const postHinhViTri = require('./ViTri/postHinhViTri')
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
//NguoiDung
rootRoute.use("", getNguoiDung)
rootRoute.use("", postNguoiDung)
rootRoute.use("", deleteNguoiDung)
rootRoute.use("", getNguoiDungPhanTrang)
rootRoute.use("", getNguoiDungTheoId)
rootRoute.use("", updateNguoiDung)
rootRoute.use("", searchNguoiDung)
rootRoute.use("", postAvatar)
//Phong
rootRoute.use("", getPhongThue)
rootRoute.use("", postPhongThue)
rootRoute.use("", getPhongThueTheoViTri)
rootRoute.use("", getPhongPhanTrang)
rootRoute.use("", getPhongThueTheoId)
rootRoute.use("", updatePhongThue)
rootRoute.use("", deletePhongThue)
rootRoute.use("", postHinhPhong)

//ViTri
rootRoute.use("", getViTri)
rootRoute.use("", postViTri)
rootRoute.use("", getViTriPhanTrang)
rootRoute.use("", getViTriTheoId)
rootRoute.use("", updateViTri)
rootRoute.use("", deleteViTri)
rootRoute.use("", postHinhViTri)

module.exports = rootRoute;
