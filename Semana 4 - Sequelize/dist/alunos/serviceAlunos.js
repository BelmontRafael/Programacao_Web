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
const repositoryAlunos_1 = __importDefault(require("./repositoryAlunos"));
class ServiceAlunos {
    listarAlunos() {
        return __awaiter(this, void 0, void 0, function* () {
            const alunos = yield new repositoryAlunos_1.default().getAll();
            if (!alunos || alunos.length === 0) {
                const erro = new Error("Não há alunos cadastrados!");
                erro.name = "bancoVazio";
                throw erro;
            }
            return alunos;
        });
    }
    visualizarAluno(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const aluno = yield new repositoryAlunos_1.default().getOne(id);
            if (!aluno) {
                const erro = new Error("Não foi possivel visualizar o aluno, pois não existe aluno com este id");
                erro.name = "idInexistente";
                throw erro;
            }
            return aluno;
        });
    }
    criarAluno(aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, idade } = aluno;
            if (!nome || !idade) {
                const erro = new Error("Dados incompletos, por favor preencher todas as informações do curso!");
                erro.name = "dadosIncompletos";
                throw erro;
            }
            return yield new repositoryAlunos_1.default().create(aluno);
        });
    }
    atualizarAluno(id, dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const aluno = yield new repositoryAlunos_1.default().getOne(id);
            if (!aluno) {
                const erro = new Error("Não foi possivel visualizar o aluno, pois não existe aluno com este id");
                erro.name = "idInexistente";
                throw erro;
            }
            return yield new repositoryAlunos_1.default().update(id, dados);
        });
    }
    atualizarAlunoParcial(id, dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const aluno = yield new repositoryAlunos_1.default().getOne(id);
            if (!aluno) {
                const erro = new Error("Não foi possivel visualizar o aluno, pois não existe aluno com este id");
                erro.name = "idInexistente";
                throw erro;
            }
            return yield new repositoryAlunos_1.default().patch(id, dados);
        });
    }
    deletarAluno(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const aluno = yield new repositoryAlunos_1.default().getOne(id);
            if (!aluno) {
                const erro = new Error("Não foi possivel visualizar o aluno, pois não existe aluno com este id");
                erro.name = "idInexistente";
                throw erro;
            }
            yield new repositoryAlunos_1.default().destroy(id);
        });
    }
    listarCursosDoAluno(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const aluno = yield new repositoryAlunos_1.default().getOne(id);
            if (!aluno) {
                const erro = new Error("Aluno não encontrado");
                erro.name = "idInexistente";
                throw erro;
            }
            return yield new repositoryAlunos_1.default().getCursosDoAluno(id);
        });
    }
    matricularAluno(id, cursos) {
        return __awaiter(this, void 0, void 0, function* () {
            const aluno = yield new repositoryAlunos_1.default().getOne(id);
            if (!aluno) {
                const erro = new Error("Aluno não encontrado");
                erro.name = "idInexistente";
                throw erro;
            }
            yield new repositoryAlunos_1.default().matricularAluno(id, cursos);
        });
    }
}
exports.default = ServiceAlunos;
