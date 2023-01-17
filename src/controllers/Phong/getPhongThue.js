const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const getPhongThue = async (req, res) => {
    try {
        const data = await prisma.phong.findMany({
            select: {
                id: true,
                ten_phong: true,
                phong_ngu: true,
                giuong: true,
                phong_tam: true,
                mo_ta: true,
                gia_tien: true,
                may_giat: true,
                ban_la: true,
                ti_vi: true,
                dieu_hoa: true,
                wifi: true,
                bep: true,
                do_xe: true,
                ho_boi: true,
                ban_ui: true,
                ma_vi_tri: true,
                hinh_anh: true
            }
        })
        if (data == "") {
            failCode(res, "", "Danh sách phòng rỗng !")
        }
        else {
            sucessCode(res, data, "Lấy thông tin phòng thành công !");
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    getPhongThue
}
