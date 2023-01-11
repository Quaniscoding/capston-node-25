const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const postDatPhong = async (req, res) => {
    let { ma_phong, ngay_den, ngay_di, so_luong_khach, ma_nguoi_dat } = req.body
    try {
        const data = await prisma.datPhong.create({
            data: {
                ma_phong, ngay_den, ngay_di, so_luong_khach, ma_nguoi_dat
            }
        });
        if (data == "") {
            failCode(res, "", "Đặt phòng thất bại")
        }
        else {
            sucessCode(res, data, "Đặt phòng thành công !");
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    postDatPhong
}
