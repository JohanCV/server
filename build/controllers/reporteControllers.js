"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ReporteController {
    canestpre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cantidadEstudiantes = yield database_1.default.query('SELECT SUM(Estudiantes) as TotalEstudiantes FROM canest');
            res.json(cantidadEstudiantes);
        });
    }
    cancurpre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cantidadCursos = yield database_1.default.query('SELECT COUNT(distinct (Id)) as TotalCursos FROM canest');
            res.json(cantidadCursos);
        });
    }
    canestpos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cantidadEstudiantespos = yield database_1.default.query('SELECT SUM(Estudiantes) as TotalEstudiantesPosgrado FROM canestpos');
            res.json(cantidadEstudiantespos);
        });
    }
    cancurpos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cantidadcursospos = yield database_1.default.query('SELECT COUNT(distinct (Id)) as TotalCursosPosgrado FROM canestpos');
            res.json(cantidadcursospos);
        });
    }
    tablaestbycurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tablaEstudiantes = yield database_1.default.query('SELECT * FROM canest');
            res.json(tablaEstudiantes);
        });
    }
    buscar(req, res) {
        res.json({ text: 'buscando by escuela' });
    }
}
const reporteController = new ReporteController();
exports.default = reporteController;
