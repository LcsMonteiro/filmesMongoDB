const { request } = require("express")
const Filme = require("../models/filme")

const criaFilme = async (request, response)=>{
    const filme = new Filme({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        availableOn: req.body.available_on,
        createdAt: req.body.created_at
    })

    try {
       const novoFilme = await filme.save()
       res.status(201).json(novoFilme) 
    }catch (err){
        response.status(400).json({message: err.message})
    }

}

const listaFilmes = async (req, res)=> {
    const filmes = await Filme.find()
    res.status(200).json(filmes)
}

const atualizaFilme =  async (req, res)=> {
    try {
        const filme = await Livro.findById(req.params.id)
        if (filme == null) {
            return res.status(404).json({ message: 'filme não encontrado!'})
        }

        if (req.body.title != null) {
            filme.title = req.body.title
        }

        if (req.body.description != null) {
            filme.description = req.body.description
        }

        if (req.body.type != null) {
            filme.type = req.body.type
        }

        if (req.body.availableOn != null) {
            filme.criadoEm = req.body.availableOn
        }

        if (req.body.createdAt != null) {
            filme.type = req.body.createdAt
        }

        const filmeAtualizado = await livro.save()
        res.json(livroAtualizado)
    
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

const deletaFilme = async (req, res) =>{
    try{
        const filme = await Filme.findById(req.params.id)
        if (filme ==null) {
            return res.status(404).json({message: "filme nao encontrado."})
        }

        await filme.remove()
        res.json({message:"Filme deletado com sucesso!"})
    }catch (err) {
        return res.status(500).json({message: err.message})
    }
}

const listaUmfilme = async (req, res) => {
    const filme = await Filme.findById(req.params.id)

    if (filme ==null){
        return res.status(404).json({message: "filme nao encontrado"})
    }

    res.json(filme)
}

module.exports = {
    criaFilme,
    listaFilmes,
    atualizaFilme,
    deletaFilme,
    listaUmfilme
}
