const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const postPhongThue = async (req, res) => {
    let { ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, ti_vi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri } = req.body
    // try {
    const data = await prisma.phong.create({
        data: {
            ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, ti_vi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri
        }
    });
    if (data == "") {
        failCode(res, "", "Tạo phòng thuê thất bại !")
    }
    else {
        sucessCode(res, data, "Tạo phòng thuê thành công !");
    }
    // } catch (error) {
    //     errorCode(res, "Lỗi Backend")
    // }
}
module.exports = {
    postPhongThue
}
