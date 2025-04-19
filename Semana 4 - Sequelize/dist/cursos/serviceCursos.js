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
const repositoryCursos_1 = __importDefault(require("./repositoryCursos"));
class ServiceCursos {
    listarCursos() {
        return __awaiter(this, void 0, void 0, function* () {
            const cursos = yield new repositoryCursos_1.default().getAll();
            if (!cursos || cursos.length === 0) {
                const erro = new Error("Não há cursos cadastrados!");
                erro.name = "bancoVazio";
                throw erro;
            }
            return cursos;
        });
    }
    visualizarCurso(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const curso = yield new repositoryCursos_1.default().getOne(id);
            if (!curso) {
                const erro = new Error("Não foi encontrado curso com este Id!");
                erro.name = "idInexistente";
                throw erro;
            }
            return curso;
        });
    }
    criarCurso(curso) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, carga_horaria } = curso;
            if (!nome || !carga_horaria) {
                const erro = new Error("Dados incompletos, por favor preencher todas as informações do curso!");
                erro.name = "dadosIncompletos";
                throw erro;
            }
            return yield new repositoryCursos_1.default().create(curso);
        });
    }
    atualizarCurso(id, curso) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursoExiste = yield new repositoryCursos_1.default().getOne(id);
            if (!cursoExiste) {
                const erro = new Error("Não foi encontrado curso com este Id!");
                erro.name = "idInexistente";
                throw erro;
            }
            return yield new repositoryCursos_1.default().update(id, curso);
        });
    }
    atualizarCursoParcial(id, curso) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursoExiste = yield new repositoryCursos_1.default().getOne(id);
            if (!cursoExiste) {
                const erro = new Error("Não foi encontrado curso com este Id!");
                erro.name = "idInexistente";
                throw erro;
            }
            return yield new repositoryCursos_1.default().patch(id, curso);
        });
    }
    deletarCurso(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const curso = yield new repositoryCursos_1.default().getOne(id);
            if (!curso) {
                const erro = new Error("Não foi encontrado curso com este Id!");
                erro.name = "idInexistente";
                throw erro;
            }
            yield new repositoryCursos_1.default().destroy(id);
        });
    }
    listarAlunosDoCurso(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const curso = yield new repositoryCursos_1.default().getOne(id);
            if (!curso) {
                const erro = new Error("Curso não encontrado");
                erro.name = "idInexistente";
                throw erro;
            }
            return yield new repositoryCursos_1.default().getAlunosDoCurso(id);
        });
    }
}
exports.default = ServiceCursos;
