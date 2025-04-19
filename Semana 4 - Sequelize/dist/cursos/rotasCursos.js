"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllerCursos_1 = __importDefault(require("./controllerCursos"));
const rotasCursos = express_1.default.Router();
rotasCursos.get("/cursos", new controllerCursos_1.default().listar);
rotasCursos.get("/curso/:id", new controllerCursos_1.default().visualizar);
rotasCursos.get("/curso/:id/alunos", new controllerCursos_1.default().listarAlunos);
rotasCursos.post("/curso", new controllerCursos_1.default().criar);
rotasCursos.put("/curso/:id", new controllerCursos_1.default().atualizar);
rotasCursos.patch("/curso/:id", new controllerCursos_1.default().atualizarParcial);
rotasCursos.delete("/curso/:id", new controllerCursos_1.default().deletar);
exports.default = rotasCursos;
