"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("../index"));
const curso_1 = __importDefault(require("./curso"));
class Aluno extends sequelize_1.Model {
}
Aluno.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: index_1.default,
    tableName: "alunos",
    timestamps: true
});
// Define N:N relationship
Aluno.belongsToMany(curso_1.default, { through: "matriculas", foreignKey: "id_aluno", otherKey: "id_curso" });
exports.default = Aluno;
