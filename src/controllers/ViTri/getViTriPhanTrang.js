const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode, errorCodeNew } = require('../../config/reponse');
const getViTriPhanTrang = async (req, res) => {
    let { pageIndex, pageSize, keyWord } = req.query;
    try {
        if (!pageIndex && pageSize) {
            const dataViTri = await prisma.viTri.findMany();
            const data = await prisma.viTri.findMany({
                take: Number(pageSize),
                where: {
                    ten_vi_tri: {
                        contains: keyWord
                    }
                },
                select: {
                    id: true,
                    hinh_anh: true,
                    quoc_gia: true,
                    tinh_thanh: true,
                    ten_vi_tri: true
                }
            })
            if (data == "") {
                failCode(res, "", "Danh sách vị trí rỗng !")
            }
            else {
                sucessCode(res, {
                    "pageIndex": pageIndex,
                    "pageSize": pageSize,
                    "keyWord": keyWord,
                    "totalRow": dataViTri.length,
                    data
                }, "Lấy thông tin vị trí thành công !");
            }
        }
        if (pageIndex && pageSize) {
            const dataViTri = await prisma.viTri.findMany();
            const data = await prisma.viTri.findMany({
                skip: (Number(pageIndex) * Number(pageSize) - Number(pageSize)),
                take: Number(pageSize),
                where: {
                    ten_vi_tri: {
                        contains: keyWord
                    }
                },
                select: {
                    id: true,
                    hinh_anh: true,
                    quoc_gia: true,
                    tinh_thanh: true,
                    ten_vi_tri: true
                }
            })
            if (data == "") {
                failCode(res, "", "Danh sách vị trí rỗng !")
            }
            else {
                sucessCode(res, {
                    "pageIndex": pageIndex,
                    "pageSize": pageSize,
                    "keyWord": keyWord,
                    "totalRow": dataViTri.length,
                    data
                }, "Lấy thông tin vị trí thành công !");
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
    getViTriPhanTrang
}
