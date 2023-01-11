const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const getDatPhong = async (req, res) => {
    try {
        const data = await prisma.datPhong.findMany()
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
    getDatPhong
}
