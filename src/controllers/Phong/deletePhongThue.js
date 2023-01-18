const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require("../../config/reponse");
const deletePhongThue = async (req, res) => {
    let id = req.params.id;
    try {
        const data = await prisma.phong.delete({
            where: {
                id: Number(id),
            },
        });
        if (data == "") {
            failCode(res, "", "Xóa phòng thuê thất bại !");
        } else {
            sucessCode(res, data, "Xóa phòng thuê thành công !");
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
};
module.exports = {
    deletePhongThue,
};
