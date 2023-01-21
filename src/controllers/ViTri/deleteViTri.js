const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require("../../config/reponse");
const deleteViTri = async (req, res) => {
    let id = req.params.id;
    try {
        let checkViTri = await prisma.viTri.findFirst({
            where: {
                id: Number(id)
            }
        })
        if (!checkViTri) {
            failCode(res, "", "Xóa vị trí thất bại !");
        }
        else {
            const data = await prisma.viTri.delete({
                where: {
                    id: Number(id),
                },
            });
            if (data == "") {
                failCode(res, "", "Xóa vị trí thất bại !");
            } else {
                sucessCode(res, data, "Xóa vị trí thành công !");
            }
        }

    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
};
module.exports = {
    deleteViTri,
};
