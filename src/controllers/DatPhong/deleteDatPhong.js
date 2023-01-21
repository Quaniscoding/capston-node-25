const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require("../../config/reponse");
const deleteDatPhong = async (req, res) => {
    let id = req.params.id;
    try {
        let checkDatPhong = await prisma.phong.findFirst({
            where: {
                id: Number(id)
            }
        });
        if (!checkDatPhong) {
            failCode(res, "", "Xóa đặt phòng thất bại !");

        }
        else {
            const data = await prisma.datPhong.delete({
                where: {
                    id: Number(id),
                },
            });
            if (data == "") {
                failCode(res, "", "Xóa đặt phòng thất bại !");
            } else {
                sucessCode(res, data, "Xóa đặt phòng thành công !");
            }
        }

    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
};
module.exports = {
    deleteDatPhong,
};
