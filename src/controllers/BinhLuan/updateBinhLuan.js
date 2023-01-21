const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const updateBinhLuan = async (req, res) => {
    let id = req.params.id;
    let { ma_phong, ma_nguoi_binh_luan, ngay_binh_luan, noi_dung, sao_binh_luan } = req.body
    try {
        let checkBinhLuan = await prisma.binhLuan.findFirst({
            where: {
                id: Number(id)
            }
        })
        if (!checkBinhLuan) {
            failCode(res, "", "Cập nhật bình luận thất bại ! Bình luận không tồn tại !")
        }
        else {
            const data = await prisma.binhLuan.update({
                data: {
                    ma_phong, ma_nguoi_binh_luan, ngay_binh_luan, noi_dung, sao_binh_luan
                },
                where: {
                    id: Number(id)
                }
            });
            if (data == "") {
                failCode(res, "", "Cập nhật bình luận thất bại")
            }
            else {
                sucessCode(res, data, "Cập nhật bình luận thành công !");
            }
        }

    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    updateBinhLuan
}
