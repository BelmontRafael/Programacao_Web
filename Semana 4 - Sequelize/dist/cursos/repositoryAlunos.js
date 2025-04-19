"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../database/models");
class RepositoryAlunos {
    constructor() {
        this.getAll = () => models_1.Aluno.findAll();
        this.getOne = (id) => models_1.Aluno.findByPk(id);
        this.create = (aluno) => models_1.Aluno.create(aluno);
        this.update = (id, dados) => models_1.Aluno.update(dados, { where: { id } });
        this.destroy = (id) => models_1.Aluno.destroy({ where: { id } });
        this.getCursosDoAluno = (id) => {
            return models_1.Aluno.findByPk(id, { include: models_1.Curso });
        };
        /* matricularAluno = async (id: number, cursos: number[]) => {
          const matriculas = cursos.map((idCurso) => ({
            id_aluno: id,
            id_curso: idCurso
          }))
      
          await db("matriculas").insert(matriculas)
        }*/
    }
}
exports.default = RepositoryAlunos;
