import { DataTypes, Model } from "sequelize"
import sequelize from "../index"
import Aluno from "./aluno"

interface CursoAttributes {
  id?: number
  nome: string
  carga_horaria: number
}

class Curso extends Model<CursoAttributes> implements CursoAttributes {
  public id!: number
  public nome!: string
  public carga_horaria!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
  Alunos: any
}

Curso.init(
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
    carga_horaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "carga_horaria"
    }
  },
  {
    sequelize,
    tableName: "cursos",
    timestamps: true
  }
)

// Define N:N relationship
Curso.belongsToMany(Aluno, { through: "matriculas", foreignKey: "id_curso", otherKey: "id_aluno" })

export default Curso
