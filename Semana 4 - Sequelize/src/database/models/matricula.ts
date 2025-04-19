import { DataTypes, Model } from "sequelize"
import sequelize from "../index"
import Aluno from "./aluno"
import Curso from "./curso"

interface MatriculaAttributes {
  id_aluno: number
  id_curso: number
}

class Matricula extends Model<MatriculaAttributes> implements MatriculaAttributes {
  public id_aluno!: number
  public id_curso!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Matricula.init(
  {
    id_aluno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "alunos",
        key: "id"
      },
      onDelete: "CASCADE"
    },
    id_curso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "cursos",
        key: "id"
      },
      onDelete: "CASCADE"
    }
  },
  {
    sequelize,
    tableName: "matriculas",
    timestamps: true
  }
)

export default Matricula
