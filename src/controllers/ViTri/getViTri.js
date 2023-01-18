const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const getViTri = async (req, res) => {
    try {
        const data = await prisma.viTri.findMany({
            select: {
                id: true,
                ten_vi_tri: true,
                tinh_thanh: true,
                quoc_gia: true,
                hinh_anh: true
            }
        })
        if (data == "") {
            failCode(res, "", "Danh sách vị trí rỗng !")
        }
        else {
            sucessCode(res, data, "Lấy thông tin vị trí thành công !");
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    getViTri
}
