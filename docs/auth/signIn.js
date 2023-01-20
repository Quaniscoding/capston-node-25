module.exports = {
    "/api/auth/signin": {
        post: {
            tags: ["Auth"],
            "operationId": "DangNhap",
            "consumes": [
                "application/json-patch+json",
                "application/json",
                "text/json",
                "application/*+json"
            ],
            "produces": [
                "application/json",
            ],
            "parameters": [{
                type: "object",
                name: "model",
                in: "body",
                schema: {
                    $ref: "#/components/schemas/DangNhapView",
                },
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