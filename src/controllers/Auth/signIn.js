const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCodeLogin, failCode, errorCode } = require('../../config/reponse');
const bcrypt = require('bcrypt');
const signIn = async (req, res) => {
    try {
        let { email, pass_word } = req.body;
        let checkLogin = await prisma.nguoiDung.findFirst({
            where: {
                email
            },
            select: {
                id: true,
                name: true,
                pass_word: true,
                phone: true,
                birth_day: true,
                gender: true,
                role: true
            }
        })
        if (checkLogin) {
            let checkPass = bcrypt.compareSync(pass_word, checkLogin.pass_word);
            if (checkPass) {
                sucessCodeLogin(res, checkLogin, "Đăng nhập thành công !")
            }
            else {
                failCode(res, "", "Mật khẩu không đúng !");
            }
        } else {
            failCode(res, "", "Email không đúng !");
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
}

module.exports = {
    signIn
}
