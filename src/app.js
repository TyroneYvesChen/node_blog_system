"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var db_1 = require("./middleware/db");
// import appRouter from './router'
var config_1 = require("./config");
var body_parser_1 = require("body-parser");
var app = express_1["default"]();
var connection = db_1["default"].connection();
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: false }));
app.all("/*", function (req, res, next) {
    // console.log(req.headers);
    res.setHeader("Access-Control-Allow-Origin", req.headers && req.headers.origin ? req.headers.origin : "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", 'true');
    console.log("卧槽！插入了！");
    if (req.method === "OPTIONS") {
        res.send(200);
    }
    else {
        next();
    }
});
app.use(express_1["default"].static(path_1["default"].join(__dirname, "public")));
// appRouter(app);
app.use("/ceshi", function (req, res) {
    console.log("ceshi");
    db_1["default"].query(connection, "select * from account", [], function (data) {
        console.log(data);
        res.json({
            result: data
        });
    });
});
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!");
});
app.listen(config_1.PORT, function () {
    console.log("\u670D\u52A1\u5668\u5DF2\u542F\u52A8 \u7AEF\u53E3\u53F7 [" + config_1.PORT + "]");
});
