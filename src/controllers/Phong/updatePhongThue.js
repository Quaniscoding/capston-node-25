const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sucessCode, failCode, errorCode } = require("../../config/reponse");
const updatePhongThue = async (req, res) => {
    let id = req.params.id;
    let { ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, ti_vi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri } = req.body
    try {
        let checkPhongThue = await prisma.phong.findFirst({
            where: {
                id: Number(id)
            }
        })
        console.log(checkPhongThue);
        if (checkPhongThue != null) {
            const data = await prisma.phong.update({
                data: {
                    ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, ti_vi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri
                },
                where: {
                    id: Number(id),
                },
            });
            if (data == "") {
                failCode(res, "", "Cập nhật đặt phòng thất bại !");
            } else {
                sucessCode(res, data, "Cập nhật đặt phòng thành công !");
            }
        }
        else {
            failCode(res, "", "Phòng không tồn tại!");
        }

    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
};
module.exports = {
    updatePhongThue
};
