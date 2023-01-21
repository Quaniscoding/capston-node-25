const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode, errorCodeNew } = require('../../config/reponse');
const getPhongPhanTrang = async (req, res) => {
    let pageIndex = req.params.pageIndex;
    let pageSize = req.params.pageSize;
    let keyWord = req.query.keyword;
    try {
        if (!pageIndex && pageSize) {
            const dataPhong = await prisma.phong.findMany();
            const data = await prisma.phong.findMany({
                take: Number(pageSize),
                where: {
                    ten_phong: {
                        contains: keyWord
                    }
                },
                select: {
                    id: true,
                    ten_phong: true,
                    phong_ngu: true,
                    giuong: true,
                    phong_tam: true,
                    mo_ta: true,
                    gia_tien: true,
                    may_giat: true,
                    ban_la: true,
                    ti_vi: true,
                    dieu_hoa: true,
                    wifi: true,
                    bep: true,
                    do_xe: true,
                    ho_boi: true,
                    ban_ui: true,
                    ma_vi_tri: true,
                    hinh_anh: true
                }
            })
            if (data == "") {
                failCode(res, "", "Danh sách phòng rỗng !")
            }
            else {
                sucessCode(res, {
                    "pageIndex": pageIndex,
                    "pageSize": pageSize,
                    "keyWord": keyWord,
                    "totalRow": dataPhong.length,
                    data
                }, "Lấy thông tin phòng thành công !");
            }
        }
        if (pageIndex && pageSize) {
            const dataPhong = await prisma.phong.findMany();
            const data = await prisma.phong.findMany({
                skip: (Number(pageIndex) * Number(pageSize) - Number(pageSize)),
                take: Number(pageSize),
                where: {
                    ten_phong: {
                        contains: keyWord
                    }
                },
                select: {
                    id: true,
                    ten_phong: true,
                    phong_ngu: true,
                    giuong: true,
                    phong_tam: true,
                    mo_ta: true,
                    gia_tien: true,
                    may_giat: true,
                    ban_la: true,
                    ti_vi: true,
                    dieu_hoa: true,
                    wifi: true,
                    bep: true,
                    do_xe: true,
                    ho_boi: true,
                    ban_ui: true,
                    ma_vi_tri: true,
                    hinh_anh: true
                }
            })
            if (data == "") {
                failCode(res, "", "Danh sách phòng rỗng !")
            }
            else {
                sucessCode(res, {
                    "pageIndex": pageIndex,
                    "pageSize": pageSize,
                    "keyWord": keyWord,
                    "totalRow": dataPhong.length,
                    data
                }, "Lấy thông tin phòng thành công !");
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
    getPhongPhanTrang
}
