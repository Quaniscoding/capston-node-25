const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const deleteBinhLuan = async (req, res) => {
    let id = req.params.id;
    try {
        let checkBinhLuan = await prisma.binhLuan.findFirst({
            where: {
                id: Number(id)
            }
        })
        if (!checkBinhLuan) {
            failCode(res, "", "Xóa bình luận thất bại")
        }
        else {
            const data = await prisma.binhLuan.delete({
                where: {
                    id: Number(id)
                }
            });
            if (data == "") {
                failCode(res, "", "Xóa bình luận thất bại")
            }
            else {
                sucessCode(res, data, "Xóa bình luận thành công !");
            }
        }

    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    deleteBinhLuan
}
