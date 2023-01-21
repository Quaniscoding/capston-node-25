module.exports = {
    "/api/get-phong-thue": {
        get: {
            tags: ["Phòng"],
            "operationId": "getPhongThue",
            "consumes": [
                "application/json-patch+json",
                "application/json",
                "text/json",
                "application/*+json"
            ],
            "parameters": [{
                "name": "token",
                "in": "header",
                "description": "Nhập token",
                "required": true,
                "type": "string"
            }
            ],
            "responses": {
                "200": {
                    "description": "Success"
                }
            }
        },
    }
};