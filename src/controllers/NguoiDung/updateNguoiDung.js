const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require("../../config/reponse");
const updateNguoiDung = async (req, res) => {
    let id = req.params.id;
    let { name, email, pass_word, phone, birth_day, gender, role } = req.body;
    try {
        const data = await prisma.nguoiDung.update({
            data: {
                name,
                pass_word,
                email,
                phone,
                birth_day,
                gender,
                role
            },
            where: {
                id: Number(id),
            },
        });
        if (data == "") {
            failCode(res, "", "Cập nhật người dùng thất bại !");
        } else {
            sucessCode(res, data, "Cập nhật người dùng thành công !");
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
};
module.exports = {
    updateNguoiDung,
};
