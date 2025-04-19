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
const serviceAlunos_1 = __importDefault(require("./serviceAlunos"));
class ControllerAlunos {
    constructor() {
        this.listar = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const cursos = yield new serviceAlunos_1.default().listarAlunos();
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
        this.visualizar = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const curso = yield new serviceAlunos_1.default().visualizarAluno(+req.params.id);
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
                yield new serviceAlunos_1.default().criarAluno(req.body);
                res.status(201).send("Aluno cadastrado com sucesso!");
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
                yield new serviceAlunos_1.default().atualizarAluno(+req.params.id, req.body);
                res.status(204).send("Aluno atualizado com sucesso!");
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
                yield new serviceAlunos_1.default().atualizarAlunoParcial(+req.params.id, req.body);
                res.status(204).send("Aluno atualizado com sucesso!");
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
                yield new serviceAlunos_1.default().deletarAluno(+req.params.id);
                res.status(204).send("Aluno deletado com sucesso!");
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
        this.listarCursos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const cursos = yield new serviceAlunos_1.default().listarCursosDoAluno(+req.params.id);
                res.status(200).json(cursos);
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
        this.matricular = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { cursos } = req.body;
                yield new serviceAlunos_1.default().matricularAluno(+req.params.id, cursos);
                res.status(201).send("Aluno matriculado com sucesso!");
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
exports.default = ControllerAlunos;
