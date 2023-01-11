const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require("../../config/reponse");
const updateDatPhong = async (req, res) => {
    let id = req.params.id;
    let { ma_phong, ngay_den, ngay_di, so_luong_khach, ma_nguoi_dat } = req.body;
    try {
        const data = await prisma.datPhong.update({
            data: {
                ma_phong,
                ngay_den,
                ngay_di,
                so_luong_khach,
                ma_nguoi_dat,
            },
            where: {
                id: Number(id),
            },
        });
        if (data == "") {
            failCode(res, "", "Cập nhật đặt phòng thất bại !");
        } else {
            sucessCode(res, data, "Cập nhật đặt phòng thành công !");
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
};
module.exports = {
    updateDatPhong,
};
