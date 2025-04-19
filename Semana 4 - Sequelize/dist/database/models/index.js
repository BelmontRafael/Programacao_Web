"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matricula = exports.Curso = exports.Aluno = void 0;
const aluno_1 = __importDefault(require("./aluno"));
exports.Aluno = aluno_1.default;
const curso_1 = __importDefault(require("./curso"));
exports.Curso = curso_1.default;
const matricula_1 = __importDefault(require("./matricula"));
exports.Matricula = matricula_1.default;
aluno_1.default.belongsToMany(curso_1.default, { through: matricula_1.default, foreignKey: "id_aluno" });
curso_1.default.belongsToMany(aluno_1.default, { through: matricula_1.default, foreignKey: "id_curso" });
