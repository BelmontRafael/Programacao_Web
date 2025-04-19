"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("../index"));
const aluno_1 = __importDefault(require("./aluno"));
class Curso extends sequelize_1.Model {
}
Curso.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    carga_horaria: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: "carga_horaria"
    }
}, {
    sequelize: index_1.default,
    tableName: "cursos",
    timestamps: true
});
// Define N:N relationship
Curso.belongsToMany(aluno_1.default, { through: "matriculas", foreignKey: "id_curso", otherKey: "id_aluno" });
exports.default = Curso;
