import { Table, Model, Column, ForeignKey, DataType } from "sequelize-typescript"
import Aluno from "./Aluno"
import Curso from "./Curso"

@Table({
  tableName: "matriculas",
  timestamps: false
})
export default class Matricula extends Model {
  @ForeignKey(() => Aluno)
  @Column(DataType.INTEGER)
  declare id_aluno: number

  @ForeignKey(() => Curso)
  @Column(DataType.INTEGER)
  declare id_curso: number
}
