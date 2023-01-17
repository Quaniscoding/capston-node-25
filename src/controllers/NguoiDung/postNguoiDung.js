const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const postNguoiDung = async (req, res) => {
    let { name, email, pass_word, phone, birth_day, gender, role } = req.body
    try {
        const data = await prisma.nguoiDung.create({
            data: {
                name, email, pass_word, phone, birth_day, gender, role
            }
        });
        if (data == "") {
            failCode(res, "", "Tạo người dùng thất bại")
        }
        else {
            sucessCode(res, data, "Tạo người dùng thành công !");
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    postNguoiDung
}
