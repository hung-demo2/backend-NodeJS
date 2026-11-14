const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
   // config template engine
   // chú ý dùng 
   // để ý tới vị trí các thư mục để có thể nối đúng đường dẫn chính xác
    app.set("views", path.join('./src', "views"));
    app.set("view engine", "ejs");

    app.use(express.static(path.join('./src', "public")));

}
module.exports = configViewEngine;