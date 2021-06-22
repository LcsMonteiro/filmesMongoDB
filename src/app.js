const express = require("express")

const app = express()

app.use(express.json())

const filmes = require("./routes/filmesRoutes")

app.use("/filmes", filmes)

module.exports = app
