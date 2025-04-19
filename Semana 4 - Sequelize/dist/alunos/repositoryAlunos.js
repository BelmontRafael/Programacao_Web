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
const aluno_1 = __importDefault(require("../database/models/aluno"));
const curso_1 = __importDefault(require("../database/models/curso"));
class RepositoryAlunos {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield aluno_1.default.findAll();
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield aluno_1.default.findByPk(id);
        });
    }
    create(aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield aluno_1.default.create(aluno);
        });
    }
    update(id, aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            const alunoInstance = yield aluno_1.default.findByPk(id);
            if (!alunoInstance)
                return null;
            return yield alunoInstance.update(aluno);
        });
    }
    patch(id, patchAluno) {
        return __awaiter(this, void 0, void 0, function* () {
            const alunoInstance = yield aluno_1.default.findByPk(id);
            if (!alunoInstance)
                return null;
            return yield alunoInstance.update(patchAluno);
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const alunoInstance = yield aluno_1.default.findByPk(id);
            if (!alunoInstance)
                return null;
            yield alunoInstance.destroy();
        });
    }
    getCursosDoAluno(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const aluno = yield aluno_1.default.findByPk(id, {
                include: [
                    {
                        model: curso_1.default,
                        through: { attributes: [] } // Exclude matriculas attributes
                    }
                ]
            });
            return aluno ? aluno.Cursos : [];
        });
    }
    matricularAluno(id, cursos) {
        return __awaiter(this, void 0, void 0, function* () {
            const aluno = yield aluno_1.default.findByPk(id);
            if (!aluno)
                return null;
            const cursosInstances = yield curso_1.default.findAll({
                where: { id: cursos }
            });
            yield aluno.addCursos(cursosInstances);
        });
    }
}
exports.default = RepositoryAlunos;
