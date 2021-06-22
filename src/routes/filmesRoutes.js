const express = require("express")
const router = express.Router()

const controller = require("../controllers/filmesController")

router.post("/", controller.criaFilme) 
router.get("/", controller.listaFilmes)

router.get ("/:id", controller.listaUmfilme)

router.patch("/:id", controller.atualizaFilme)

router.delete("/:id", controller.deletaFilme)

module.exports = router
