"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reporteControllers_1 = __importDefault(require("../controllers/reporteControllers"));
const reporteControllers_2 = __importDefault(require("../controllers/reporteControllers"));
class ReporteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', reporteControllers_1.default.canestpre);
        this.router.get('/', reporteControllers_1.default.cancurpre);
        this.router.get('/', reporteControllers_1.default.canestpos);
        this.router.get('/', reporteControllers_1.default.cancurpos);
        this.router.get('/', reporteControllers_1.default.tablaestbycurso);
        this.router.post('/', reporteControllers_2.default.buscar);
    }
}
const reporteRoutes = new ReporteRoutes();
exports.default = reporteRoutes.router;
