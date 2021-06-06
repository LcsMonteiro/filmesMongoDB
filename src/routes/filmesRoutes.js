const express = require("express")
const router = express.Router()

const controller = require("../controllers/livrosController")

router.post("/", controller.criaFilme) //refazer as rotas e criar documentaçao

router.get("/",controller.listaFilmes)

router.get ("/:id", controller.listaUmfilme)

router.patch("/id", controller.atualizaFilme)

router.delete("/:id", controller.deletaFilme)

module.exports = router
