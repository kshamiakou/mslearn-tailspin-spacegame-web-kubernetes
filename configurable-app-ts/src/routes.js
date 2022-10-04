"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_controller_1 = require("./controllers/app.controller");
exports.default = (app) => {
    app.get("/", app_controller_1.handleRootRequest);
};
