"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositoryAlunos_1 = __importDefault(require("./repositoryAlunos"));
class ServiceAlunos {
    constructor() {
        this.listarAlunos = () => new repositoryAlunos_1.default().getAll();
        this.visualizarAluno = (id) => new repositoryAlunos_1.default().getOne(id);
        this.criarAluno = (aluno) => new repositoryAlunos_1.default().create(aluno);
        this.atualizarAluno = (id, dados) => new repositoryAlunos_1.default().update(id, dados);
        this.deletarAluno = (id) => new repositoryAlunos_1.default().destroy(id);
        this.listarCursosDoAluno = (id) => new repositoryAlunos_1.default().getCursosDoAluno(id);
        /*matricularAluno = (id: number, cursos: number[]) => this.repo.matricular(id, cursos)*/
    }
}
exports.default = ServiceAlunos;
