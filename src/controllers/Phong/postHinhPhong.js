const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, errorCode, failCode } = require('../../config/reponse');
const postHinhPhong = async (req, res) => {
    try {
        const fs = require('fs');
        if (req.file.size >= 4000000) {
            fs.unlinkSync(process.cwd() + "/public/img/" + req.file.filename);
            failCode(res, "", "Chỉ được phép upload ảnh dưới 4Mb !")
            return;
        }
        if (req.file.mimetype != "image/jpeg" && req.file.mimetype != "image/jpg") {
            fs.unlinkSync(process.cwd() + "/public/img/" + req.file.filename);
            failCode(res, "", "Hình ảnh sai định dạng !")
            return;
        }
        fs.readFile(process.cwd() + "/public/img/" + req.file.filename, (err, data) => {
            let dataBase = `data:${req.file.mimetype};base64,${Buffer.from(data).toString("base64")}`;
            setTimeout(() => {
                fs.unlinkSync(process.cwd() + "/public/img/" + req.file.filename);
            }, 5000);
            let id = req.params.id
            let { hinh_anh } = req.body;
            hinh_anh = dataBase
            const uploadImage = async () => {
                const dataUpload = await prisma.phong.update({
                    data: { hinh_anh }
                    , where: {
                        id: Number(id)
                    }
                });
                sucessCode(res, dataUpload, "Upload hình phòng thành công !");
            }
            uploadImage()
        })
    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
}
module.exports = {
    postHinhPhong
}