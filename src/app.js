const express = require("express")
const app = express()

const filmes = require("./routes/filmesRoutes")

app.use("/filmes",filmes)

app.use(express.json())

module.exports = app
