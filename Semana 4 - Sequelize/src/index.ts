import express from "express"
import rotas from "./rotas"
import dotenv from "dotenv"
import sequelize from "./database/index"

dotenv.config()

const app = express()
app.use(express.json())
app.use(rotas)
app.listen(3000, async () => {
  await sequelize.sync()
  console.log("API está rodando!")
})
