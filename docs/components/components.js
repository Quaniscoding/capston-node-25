module.exports = {
    "components": {
        "schemas": {
            "ThongTinNguoiDung": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "name": {
                        "type": "string",
                    },
                    "email": {
                        "type": "string",
                    },
                    "pass_word": {
                        "type": "string",
                    },
                    "phone": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "birthday": {
                        "type": "string",
                    },
                    "gender": {
                        "type": "boolean",
                    },
                    "role": {
                        "type": "string",
                    },
                }
            },
            "DangNhapView": {
                "type": "object",
                "properties": {
                    "email": {
                        "type": "string",
                    },
                    "pass_word": {
                        "type": "string"
                    }
                }
            },
            "BinhLuanViewModel": {
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "maPhong": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "maNguoiBinhLuan": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "ngayBinhLuan": {
                        "type": "string",
                    },
                    "noiDung": {
                        "type": "string",
                    },
                    "saoBinhLuan": {
                        "type": "integer",
                        "format": "int32"
                    },
                }
            },
            "DatPhongViewModel": {
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "maPhong": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "ngayDen": {
                        "type": "string",
                        "format": "dateTime"
                    },
                    "ngayDi": {
                        "type": "string",
                        "format": "dateTime"
                    },
                    "soLuongKhach": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "maNguoiDung": {
                        "type": "integer",
                        "format": "int32"
                    }
                }
            },
            "CapNhatNguoiDung": {
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "name": {
                        "type": "string",
                    },
                    "email": {
                        "type": "string",
                    },
                    "password": {
                        "type": "string",
                    },
                    "phone": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "birthday": {
                        "type": "string",
                    },
                    "gender": {
                        "type": "boolean",
                    },
                    "role": {
                        "type": "string",
                    },
                }
            },
            "CapNhatNguoiDung": {
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    }
                }
            },
            "PhongViewModel": {
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "tenPhong": {
                        "type": "string",
                    },
                    "khach": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "phongNgu": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "giuong": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "phongTam": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "moTa": {
                        "type": "string",
                    },
                    "giaTien": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "mayGiat": {
                        "type": "boolean",
                    },
                    "banLa": {
                        "type": "boolean",
                    },
                    "tivi": {
                        "type": "boolean",
                    },
                    "dieuHoa": {
                        "type": "boolean",
                    },
                    "wifi": {
                        "type": "boolean",
                    },
                    "bep": {
                        "type": "boolean",
                    },
                    "doXe": {
                        "type": "boolean",

                    },
                    "hoBoi": {
                        "type": "boolean",
                    },
                    "banUi": {
                        "type": "boolean",
                    },
                    "maViTri": {
                        "type": "string",
                    },
                    "hinhAnh": {
                        "type": "integer",
                        "format": "int32"
                    }
                }
            },
            "ViTriViewModel": {
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "tenViTri": {
                        "type": "string"
                    },
                    "tinhThanh": {
                        "type": "string"
                    },
                    "quocGia": {
                        "type": "string"
                    },
                    "hinhAnh": {
                        "type": "string"
                    }
                }
            },
        },

        "parameters": {
            "skipParam": {
                "name": "skip",
                "in": "query",
                "description": "number of items to skip",
                "required": true,
                "schema": {
                    "type": "integer",
                    "format": "int32"
                }
            },
            "limitParam": {
                "name": "limit",
                "in": "query",
                "description": "max records to return",
                "required": true,
                "schema": {
                    "type": "integer",
                    "format": "int32"
                }
            }
        },
        "responses": {
            "NotFound": {
                "description": "Entity not found."
            },
            "IllegalInput": {
                "description": "Illegal input for operation."
            },
            "GeneralError": {
                "description": "General Error",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/GeneralError"
                        }
                    }
                }
            }
        },
        "securitySchemes": {
            "api_key": {
                "type": "apiKey",
                "name": "api_key",
                "in": "header"
            },
            "petstore_auth": {
                "type": "oauth2",
                "flows": {
                    "implicit": {
                        "authorizationUrl": "http://example.org/api/oauth/dialog",
                        "scopes": {
                            "write:pets": "modify pets in your account",
                            "read:pets": "read your pets"
                        }
                    }
                }
            }
        }
    }
};