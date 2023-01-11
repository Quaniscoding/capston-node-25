const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const getDatPhongTheoNguoiDung = async (req, res) => {
    let idNguoiDungDatPhong = req.params.idNguoiDung;
    try {
        const data = await prisma.datPhong.findMany({
            where: {
                ma_nguoi_dat: Number(idNguoiDungDatPhong)
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
    getDatPhongTheoNguoiDung
}
