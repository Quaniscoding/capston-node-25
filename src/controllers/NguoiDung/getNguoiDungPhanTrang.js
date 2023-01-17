const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode, errorCodeNew } = require('../../config/reponse');
const getNguoiDungPhanTrang = async (req, res) => {
    let { pageIndex, pageSize, keyWord } = req.query;
    try {
        if (!pageIndex && pageSize) {
            const dataNguoiDung = await prisma.nguoiDung.findMany();
            const data = await prisma.nguoiDung.findMany({
                take: Number(pageSize),
                where: {
                    name: {
                        contains: keyWord
                    }
                },
                select: {
                    id: true,
                    name: true,
                    phone: true,
                    birth_day: true,
                    gender: true,
                    role: true
                }
            })
            if (data == "") {
                failCode(res, "", "Danh sách người dùng rỗng !")
            }
            else {
                sucessCode(res, {
                    "pageIndex": pageIndex,
                    "pageSize": pageSize,
                    "keyWord": keyWord,
                    "totalRow": dataNguoiDung.length,
                    data
                }, "Lấy thông tin người dùng thành công !");
            }
        }
        if (pageIndex && pageSize) {
            const dataNguoiDung = await prisma.nguoiDung.findMany();
            const data = await prisma.nguoiDung.findMany({
                skip: (Number(pageIndex) * Number(pageSize) - Number(pageSize)),
                take: Number(pageSize),
                where: {
                    name: {
                        contains: keyWord
                    }
                },
                select: {
                    id: true,
                    name: true,
                    phone: true,
                    birth_day: true,
                    gender: true,
                    role: true
                }
            })
            if (data == "") {
                failCode(res, "", "Danh sách người dùng rỗng !")
            }
            else {
                sucessCode(res, {
                    "pageIndex": pageIndex,
                    "pageSize": pageSize,
                    "keyWord": keyWord,
                    "totalRow": dataNguoiDung.length,
                    data
                }, "Lấy thông tin người dùng thành công !");
            }
        }
        if (!pageIndex && !pageSize || !pageSize) {
            errorCodeNew(res, "The number of rows provided for a FETCH clause must be greater then zero.",)
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    getNguoiDungPhanTrang
}
