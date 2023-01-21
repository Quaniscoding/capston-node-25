module.exports = {
    "/api/post-phong-thue": {
        post: {
            tags: ["Phòng"],
            "operationId": "postPhongThue",
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
            "requestBody": {
                "description": "Post phòng thuê",
                "require": "true",
                "content": {
                    " application/json": {
                        schema: {
                            $ref: "#/components/schemas/PhongViewModel",
                        },

                    }
                },
            },
            "responses": {
                "200": {
                    "description": "Success"
                }
            }
        },
    }
};