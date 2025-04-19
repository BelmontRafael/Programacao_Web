"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Matriculas", {
      id_aluno: {
        type: Sequelize.INTEGER,
        references: { model: "Alunos", key: "id" },
        onDelete: "CASCADE"
      },
      id_curso: {
        type: Sequelize.INTEGER,
        references: { model: "Cursos", key: "id" },
        onDelete: "CASCADE"
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Matriculas")
  }
}
