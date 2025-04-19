"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllerAlunos_1 = __importDefault(require("./controllerAlunos"));
const rotasAlunos = express_1.default.Router();
rotasAlunos.get("/alunos", new controllerAlunos_1.default().listar);
rotasAlunos.get("/aluno/:id", new controllerAlunos_1.default().visualizar);
rotasAlunos.get("/aluno/:id/cursos", new controllerAlunos_1.default().listarCursos);
rotasAlunos.post("/aluno", new controllerAlunos_1.default().criar);
rotasAlunos.post("/aluno/:id/matricular", new controllerAlunos_1.default().matricular);
rotasAlunos.put("/aluno/:id", new controllerAlunos_1.default().atualizar);
rotasAlunos.patch("/aluno/:id", new controllerAlunos_1.default().atualizarParcial);
rotasAlunos.delete("/aluno/:id", new controllerAlunos_1.default().deletar);
exports.default = rotasAlunos;
