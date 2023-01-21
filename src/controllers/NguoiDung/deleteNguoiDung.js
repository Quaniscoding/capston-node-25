const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require("../../config/reponse");
const deleteNguoiDung = async (req, res) => {
    let id = req.params.id;
    try {
        let checkNguoiDung = await prisma.nguoiDung.findFirst({
            where: {
                id: Number(id)
            }
        });
        if (!checkNguoiDung) {
            failCode(res, "", "Xóa người dùng thất bại !");

        }
        else {
            const data = await prisma.nguoiDung.delete({
                where: {
                    id: Number(id),
                },
            });
            if (data == "") {
                failCode(res, "", "Xóa người dùng thất bại !");
            } else {
                sucessCode(res, data, "Xóa người dùng thành công !");
            }
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
};
module.exports = {
    deleteNguoiDung,
};
