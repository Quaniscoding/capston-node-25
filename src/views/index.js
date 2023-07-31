const express = require("express"),
    bodyParser = require("body-parser"),
    swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express");
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.static("."));
app.use(cors());
app.listen(8080);
const rootRoute = require('../routes');
const { tags } = require("../../docs/tags");
const { components } = require("../../docs/components/components");
const { "/api/auth/signin": signIn } = require("../../docs/auth/signIn");
const { "/api/auth/signup": signUp } = require("../../docs/auth/signUp");
const { "/api/get-binh-luan": getBinhLuan } = require("../../docs/BinhLuan/getBinhLuan");
const { "/api/post-binh-luan": postBinhLuan } = require("../../docs/BinhLuan/postBinhLuan");
const { "/api/update-binh-luan/{id}": updateBinhLuan } = require("../../docs/BinhLuan/updateBinhLuan");
const { "/api/delete-binh-luan/{id}": deleteBinhLuan } = require("../../docs/BinhLuan/deleteBinhLuan");
const { "/api/get-binh-luan-theo-ma-phong/{MaPhong}": binhLuanTheoMaPhong } = require("../../docs/BinhLuan/getBinhLuanTheoMaPhong");
const { "/api/get-dat-phong": getDatPhong } = require("../../docs/DatPhong/getDatPhong")
const { "/api/post-dat-phong": postDatPhong } = require("../../docs/DatPhong/postDatPhong")
const { "/api/update-dat-phong/{id}": updateDatPhong } = require("../../docs/DatPhong/updateDatPhong")
const { "/api/get-dat-phong-id/{id}": getDatPhongId } = require("../../docs/DatPhong/getDatPhongId")
const { "/api/delete-dat-phong/{id}": deleteDatPhong } = require("../../docs/DatPhong/deleteDatPhong")
const { "/api/dat-phong/lay-theo-nguoi-dung/{MaNguoiDung}": getDatPhongTheoMaNguoiDung } = require("../../docs/DatPhong/getDatPhongTheoMaNguoiDung");
const { "/api/get-nguoi-dung": getNguoiDung } = require("../../docs/NguoiDung.js/getNguoiDung");
const { "/api/post-nguoi-dung": postNguoiDung } = require("../../docs/NguoiDung.js/postNguoiDung");
const { "/api/delete-nguoi-dung/{id}": deleteNguoiDung } = require("../../docs/NguoiDung.js/deleteNguoiDung");
const { "/api/get-nguoi-dung/phan-trang/{pageIndex}/{pageSize}": getNguoiDungPhanTrang } = require("../../docs/NguoiDung.js/getNguoiDungPhanTrang");
const { "/api/get-nguoi-dung-id/{id}": getNguoiDungId } = require("../../docs/NguoiDung.js/getNguoiDungId");
const { "/api/update-nguoi-dung/{id}": updateNguoiDung } = require("../../docs/NguoiDung.js/updateNguoiDung");
const { "/api/get-nguoi-dung/search/{TenNguoiDung}": getNguoiDungSearch } = require("../../docs/NguoiDung.js/getNguoiDungSearch");
const { "/api/post-nguoi-dung/avatar/{id}": postAvatar } = require("../../docs/NguoiDung.js/postAvatar");
const { "/api/get-phong-thue": getPhongThue } = require("../../docs/Phong/getPhongThue");
const { "/api/get-phong-thue-id/{id}": getPhongThueId } = require("../../docs/Phong/getPhongThueId");
const { "/api/get-phong-thue/lay-phong-theo-vi-tri/{IdViTri}": getPhongThueViTri } = require("../../docs/Phong/getPhongThueViTri");
const { "/api/get-phong-thue/phan-trang/{pageIndex}/{pageSize}": getPhongThuePhanTrang } = require("../../docs/Phong/getPhongThuePhanTrang");
const { "/api/post-phong-thue": postPhongThue } = require("../../docs/Phong/postPhongThue");
const { "/api/update-phong-thue/{id}": updatePhongThue } = require("../../docs/Phong/updatePhongThue");
// const { "/api/delete-phong-thue/{id}": deletePhongThue } = require("../../docs/Phong/deletePhongThue");
const { "/api/get-vi-tri": getViTri } = require("../../docs/ViTri/getViTri");
const { "/api/post-vi-tri": postViTri } = require("../../docs/ViTri/postViTri");
const { "/post-hinh-vi-tri/{id}": postHinhViTri } = require("../../docs/ViTri/postHinhViTri");
const { "/api/get-vi-tri-id/{id}": getViTriId } = require("../../docs/ViTri/getViTriId");
const { "/api/delete-vi-tri/{id}": deleteViTri } = require("../../docs/ViTri/deleteViTri");
const { "/api/update-vi-tri/{id}": updateViTri } = require("../../docs/ViTri/updateViTri");
const { "/api/get-vi-tri/phan-trang/{pageIndex}/{pageSize}": getViTriPhanTrang } = require("../../docs/ViTri/getViTriPhanTrang");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            "version": "v1",
            "title": "Airbnb",
        },
        tags,
        components,
        paths: {
            //auth
            "/api/auth/signin": signIn,
            "/api/auth/signup": signUp,
            //bình luận
            "/api/get-binh-luan": getBinhLuan,
            "/api/post-binh-luan": postBinhLuan,
            "/api/update-binh-luan/{id}": updateBinhLuan,
            "/api/delete-binh-luan/{id}": deleteBinhLuan,
            "/api/get-binh-luan-theo-ma-phong/{MaPhong}": binhLuanTheoMaPhong,
            //đặt phòng
            "/api/get-dat-phong": getDatPhong,
            "/api/post-dat-phong": postDatPhong,
            "/api/get-dat-phong-id/{id}": getDatPhongId,
            "/api/update-dat-phong/{id}": updateDatPhong,
            "/api/delete-dat-phong/{id}": deleteDatPhong,
            "/api/dat-phong/lay-theo-nguoi-dung/{MaNguoiDung}": getDatPhongTheoMaNguoiDung,
            //người dùng
            "/api/get-nguoi-dung": getNguoiDung,
            "/api/post-nguoi-dung": postNguoiDung,
            "/api/delete-nguoi-dung/{id}": deleteNguoiDung,
            "/api/get-nguoi-dung/phan-trang/{pageIndex}/{pageSize}": getNguoiDungPhanTrang,
            "/api/get-nguoi-dung-id/{id}": getNguoiDungId,
            "/api/update-nguoi-dung/{id}": updateNguoiDung,
            "/api/get-nguoi-dung/search/{TenNguoiDung}": getNguoiDungSearch,
            "/api/post-nguoi-dung/avatar/{id}": postAvatar,
            //phòng thuê
            "/api/get-phong-thue": getPhongThue,
            "/api/get-phong-thue-id/{id}": getPhongThueId,
            "/api/get-phong-thue/lay-phong-theo-vi-tri/{IdViTri}": getPhongThueViTri,
            "/api/get-phong-thue/phan-trang/{pageIndex}/{pageSize}": getPhongThuePhanTrang,
            "/api/post-phong-thue": postPhongThue,
            // "/api/delete-phong-thue/{id}": deletePhongThue,
            "/api/update-phong-thue/{id}": updatePhongThue,
            //vị trí
            "/api/get-vi-tri": getViTri,
            "/api/post-vi-tri": postViTri,
            "/api/get-vi-tri-id/{id}": getViTriId,
            "/api/get-vi-tri/phan-trang/{pageIndex}/{pageSize}": getViTriPhanTrang,
            "/api/delete-vi-tri/{id}": deleteViTri,
            "/api/update-vi-tri/{id}": updateViTri,
            "/post-hinh-vi-tri/{id}": postHinhViTri,

        }
    },
    apis: ["../routes/index.js", "../controllers/Auth/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/swagger",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true }),
);
app.use("/api", rootRoute)