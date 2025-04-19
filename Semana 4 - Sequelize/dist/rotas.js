"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rotasAlunos_1 = __importDefault(require("./alunos/rotasAlunos"));
const rotasCursos_1 = __importDefault(require("./cursos/rotasCursos"));
const rotas = express_1.default.Router();
rotas.use(rotasAlunos_1.default, rotasCursos_1.default);
exports.default = rotas;
