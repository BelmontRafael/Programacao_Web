import { DataTypes, Model } from "sequelize"
import sequelize from "../index"
import Curso from "./curso"

interface AlunoAttributes {
  id?: number
  nome: string
  idade: number
}

class Aluno extends Model<AlunoAttributes> implements AlunoAttributes {
  addCursos(cursosInstances: Curso[]) {
      throw new Error("Method not implemented.")
  }
  public id!: number
  public nome!: string
  public idade!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
    Cursos: any
}

Aluno.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "alunos",
    timestamps: true
  }
)

// Define N:N relationship
Aluno.belongsToMany(Curso, { through: "matriculas", foreignKey: "id_aluno", otherKey: "id_curso" })

export default Aluno
