import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  DeletedAt,
  BelongsToMany
} from "sequelize-typescript"
import Aluno from "./Aluno"
import Matricula from "./Matricula"

@Table({
  tableName: "cursos",
  modelName: "Curso",
  timestamps: true
})
export default class Curso extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number

  @Column(DataType.STRING)
  declare nome: string

  @Column(DataType.INTEGER)
  declare carga_horaria: number

  @CreatedAt
  declare createdAt: Date

  @DeletedAt
  declare deletedAt: Date

  @BelongsToMany(() => Aluno, () => Matricula)
  declare alunos?: Aluno[]
}
