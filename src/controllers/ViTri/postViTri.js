const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const postViTri = async (req, res) => {
    let { ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh } = req.body
    try {
        const data = await prisma.viTri.create({
            data: {
                ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh
            }
        });
        if (data == "") {
            failCode(res, "", "Tạo vị trí thất bại !")
        }
        else {
            sucessCode(res, data, "Tạo vị trí thành công !");
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    postViTri
}
