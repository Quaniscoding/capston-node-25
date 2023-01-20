const express = require("express"),
    bodyParser = require("body-parser"),
    swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express");
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.static("."));
app.use(cors());
app.listen(8080);
const rootRoute = require('../routes');
const { tags } = require("../../docs/tags");
const { components } = require("../../docs/components/components");
const { "/api/auth/signin": signIn } = require("../../docs/auth/signIn");
const { "/api/auth/signup": signUp } = require("../../docs/auth/signUp");
const { "/api/binh-luan": binhLuan } = require("../../docs/BinhLuan/getBinhLuan");
const { "/api/binh-luan/{MaPhong}": binhLuanTheoMaPhong } = require("../../docs/BinhLuan/getBinhLuanTheoMaPhong");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            "version": "v1",
            "title": "Airbnb"
        },
        tags,
        components,
        paths: {
            "/api/auth/signin": signIn,
            "/api/auth/signup": signUp,
            "/api/binh-luan": binhLuan,
            "/api/binh-luan/{MaPhong}": binhLuanTheoMaPhong,
        }
    },
    apis: ["../routes/index.js", "../controllers/Auth/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true }),
);
app.use("/api", rootRoute)