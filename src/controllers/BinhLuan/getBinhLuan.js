const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const binhLuan = async (req, res) => {
    try {
        const data = await prisma.binhLuan.findMany();
        if (data == "") {
            failCode(res, "", "Danh sách bình luận rỗng !")
        }
        else {
            sucessCode(res, data, "Lấy thông tin bình luận thành công !");
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    binhLuan
}
