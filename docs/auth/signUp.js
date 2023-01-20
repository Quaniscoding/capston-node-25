module.exports = {
    "/api/auth/signup": {
        "post": {
            "tags": [
                "Auth"
            ],
            "operationId": "DangKy",
            "consumes": [
                "application/json-patch+json",
                "application/json",
                "text/json",
                "application/*+json"
            ],
            "parameters": [
                {
                    "name": "model",
                    "in": "body",
                    "required": false,
                    "schema": {
                        "$ref": "#/components/schemas/ThongTinNguoiDung"
                    }
                },
            ],
            "responses": {
                "200": {
                    "description": "Success"
                }
            }
        }
    },


};