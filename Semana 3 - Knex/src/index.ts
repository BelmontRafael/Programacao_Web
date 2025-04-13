import express from "express"
import dotenv from "dotenv"
import rotas from "./rotas"
dotenv.config()

const app = express()
app.use(express.json())
app.use(rotas)
app.listen(3000, () => console.log("Api está rodando!"))
