"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reporteControllers_1 = __importDefault(require("../controllers/reporteControllers"));
class ReporteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', reporteControllers_1.default.tablaestbycurso);
    }
}
const reporteRoutes = new ReporteRoutes();
exports.default = reporteRoutes.router;
