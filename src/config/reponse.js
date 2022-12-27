// 200 , 400 , 500
const { parseToken } = require('../middlewares/baseToken')
const date = new Date();
const sucessCode = (res, data, message) => {
    res.status(200).json({
        message,
        content: data,
        "DateTime": date
    });
}
const sucessCodeLogin = (res, data, message) => {
    res.status(200).json({
        message,
        content: {
            "User": data,
            "Token": parseToken(data),
            "DateTime": date
        }
    });
}
//400
const failCode = (res, data, message) => {
    res.status(400).json({
        message,
        content: data,
        "DateTime": date
    });
}
//500
const errorCode = (res, message) => {
    res.status(500).send(message);
}
module.exports = {
    sucessCode,
    sucessCodeLogin,
    failCode,
    errorCode
}