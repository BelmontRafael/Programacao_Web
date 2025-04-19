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
const curso_1 = __importDefault(require("../database/models/curso"));
const aluno_1 = __importDefault(require("../database/models/aluno"));
class RepositoryCursos {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield curso_1.default.findAll();
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield curso_1.default.findByPk(id);
        });
    }
    create(curso) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield curso_1.default.create(curso);
        });
    }
    update(id, curso) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursoInstance = yield curso_1.default.findByPk(id);
            if (!cursoInstance)
                return null;
            return yield cursoInstance.update(curso);
        });
    }
    patch(id, patchCurso) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursoInstance = yield curso_1.default.findByPk(id);
            if (!cursoInstance)
                return null;
            return yield cursoInstance.update(patchCurso);
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursoInstance = yield curso_1.default.findByPk(id);
            if (!cursoInstance)
                return null;
            yield cursoInstance.destroy();
        });
    }
    getAlunosDoCurso(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const curso = yield curso_1.default.findByPk(id, {
                include: [
                    {
                        model: aluno_1.default,
                        through: { attributes: [] } // Exclude matriculas attributes
                    }
                ]
            });
            return curso ? curso.Alunos : [];
        });
    }
}
exports.default = RepositoryCursos;
