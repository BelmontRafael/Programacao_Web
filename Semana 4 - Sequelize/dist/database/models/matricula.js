"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("../index"));
class Matricula extends sequelize_1.Model {
}
Matricula.init({
    id_aluno: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: "alunos",
            key: "id"
        },
        onDelete: "CASCADE"
    },
    id_curso: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: "cursos",
            key: "id"
        },
        onDelete: "CASCADE"
    }
}, {
    sequelize: index_1.default,
    tableName: "matriculas",
    timestamps: true
});
exports.default = Matricula;
