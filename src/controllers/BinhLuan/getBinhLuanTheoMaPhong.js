const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const getBinhLuanTheoMaPhong = async (req, res) => {
    let maPhong = req.params.maPhong;
    try {
        const data = await prisma.binhLuan.findMany({
            where: {
                ma_phong: Number(maPhong)
            },
            include: {
                NguoiDung: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
        if (data == "") {
            failCode(res, "", "Không có bình luận !")
        }
        else {
            sucessCode(res, data, "Lấy thông tin bình luận thành công !");
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    getBinhLuanTheoMaPhong
}
