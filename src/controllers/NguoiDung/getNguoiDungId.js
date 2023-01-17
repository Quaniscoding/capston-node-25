const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const getNguoiDungTheoId = async (req, res) => {
    let id = req.params.id;
    try {
        const data = await prisma.nguoiDung.findMany({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                name: true,
                phone: true,
                birth_day: true,
                gender: true,
                role: true
            }
        })
        if (data == "") {
            failCode(res, "", "Danh sách người dùng rỗng !")
        }
        else {
            sucessCode(res, data, "Lấy thông tin người dùng thành công !");
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    getNguoiDungTheoId
}
