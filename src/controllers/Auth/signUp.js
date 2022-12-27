const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require('../../config/reponse');
const bcrypt = require('bcrypt');
const signUp = async (req, res) => {
    try {
        let { name, email, pass_word, phone, birth_day, gender, role } = req.body;
        let passWordHash = bcrypt.hashSync(pass_word, 10);
        let checkEmail = await prisma.nguoiDung.findFirst({
            where: {
                email
            }
        })
        if (checkEmail) {
            failCode(res, "", "Email đã tồn tại !")
        }
        else {
            const dataSignUp = await prisma.nguoiDung.create({
                data: {
                    name, email, pass_word: passWordHash, phone, birth_day, gender, role
                },
                select: {
                    name: true,
                    email: true,
                    phone: true,
                    birth_day: true,
                    gender: true,
                    role: true
                }
            }
            )
            sucessCode(res, dataSignUp, "Tạo tài khoản thành công !")
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}

module.exports = {
    signUp
}