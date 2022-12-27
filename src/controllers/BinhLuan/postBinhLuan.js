const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const postBinhLuan = async (req, res) => {
    let { ma_phong, ma_nguoi_binh_luan, ngay_binh_luan, noi_dung, sao_binh_luan } = req.body
    try {
        const data = await prisma.binhLuan.create({
            data: {
                ma_phong, ma_nguoi_binh_luan, ngay_binh_luan, noi_dung, sao_binh_luan
            }
        });
        if (data == "") {
            failCode(res, "", "Bình luận thất bại")
        }
        else {
            sucessCode(res, data, "Bình luận thành công !");
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    postBinhLuan
}
