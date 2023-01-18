const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require("../../config/reponse");
const updateViTri = async (req, res) => {
    let id = req.params.id;
    let { ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh } = req.body
    try {
        const data = await prisma.viTri.update({
            data: {
                ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh
            },
            where: {
                id: Number(id),
            },
        });
        if (data == "") {
            failCode(res, "", "Cập nhật vị trí thất bại !");
        } else {
            sucessCode(res, data, "Cập nhật vị trí thành công !");
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
};
module.exports = {
    updateViTri
};
