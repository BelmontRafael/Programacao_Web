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
const serviceCursos_1 = __importDefault(require("./serviceCursos"));
class ControllerCursos {
    constructor() {
        this.listar = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const cursos = yield new serviceCursos_1.default().listarCursos();
                res.status(200).json(cursos);
            }
            catch (error) {
                if (error instanceof Error) {
                    switch (error.name) {
                        case "bancoVazio":
                            res.status(400).json({ name: error.name, msg: error.message });
                            break;
                        default:
                            res.status(400).json("Ocorreu um erro inesperado com sua requisição!");
                            break;
                    }
                }
            }
        });
        this.listarAlunos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const alunos = yield new serviceCursos_1.default().listarAlunosDoCurso(+req.params.id);
                res.status(200).json(alunos);
            }
            catch (error) {
                if (error instanceof Error) {
                    switch (error.name) {
                        case "idInexistente":
                            res.status(400).json({ name: error.name, msg: error.message });
                            break;
                        default:
                            res.status(400).json("Ocorreu um erro inesperado com sua requisição!");
                            break;
                    }
                }
            }
        });
        this.visualizar = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const curso = yield new serviceCursos_1.default().visualizarCurso(+req.params.id);
                res.status(200).json(curso);
            }
            catch (error) {
                if (error instanceof Error) {
                    switch (error.name) {
                        case "idInexistente":
                            res.status(400).json({ name: error.name, msg: error.message });
                            break;
                        default:
                            res.status(400).json("Ocorreu um erro inesperado com sua requisição!");
                            break;
                    }
                }
            }
        });
        this.criar = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const curso = yield new serviceCursos_1.default().criarCurso(req.body);
                res.status(201).json("Curso cadastrado com sucesso!");
            }
            catch (error) {
                if (error instanceof Error) {
                    switch (error.name) {
                        case "dadosIncompletos":
                            res.status(400).json({ name: error.name, msg: error.message });
                            break;
                        default:
                            res.status(400).json("Ocorreu um erro inesperado com sua requisição!");
                            break;
                    }
                }
            }
        });
        this.atualizar = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield new serviceCursos_1.default().atualizarCurso(+req.params.id, req.body);
                res.status(204).send("Curso atualizado com sucesso!");
            }
            catch (error) {
                if (error instanceof Error) {
                    switch (error.name) {
                        case "idInexistente":
                            res.status(400).json({ name: error.name, msg: error.message });
                            break;
                        default:
                            res.status(400).json("Ocorreu um erro inesperado com sua requisição!");
                            break;
                    }
                }
            }
        });
        this.atualizarParcial = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield new serviceCursos_1.default().atualizarCursoParcial(+req.params.id, req.body);
                res.status(204).send("Curso atualizado com sucesso!");
            }
            catch (error) {
                if (error instanceof Error) {
                    switch (error.name) {
                        case "idInexistente":
                            res.status(400).json({ name: error.name, msg: error.message });
                            break;
                        default:
                            res.status(400).json("Ocorreu um erro inesperado com sua requisição!");
                            break;
                    }
                }
            }
        });
        this.deletar = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield new serviceCursos_1.default().deletarCurso(+req.params.id);
                res.status(204).send("Curso deletado com sucesso!");
            }
            catch (error) {
                if (error instanceof Error) {
                    switch (error.name) {
                        case "idInexistente":
                            res.status(400).json({ name: error.name, msg: error.message });
                            break;
                        default:
                            res.status(400).json("Ocorreu um erro inesperado com sua requisição!");
                            break;
                    }
                }
            }
        });
    }
}
exports.default = ControllerCursos;
