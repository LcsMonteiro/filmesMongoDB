const mongoose = require("mongoose")
//const { request } = require("express")
const Filme = require("../models/filme")

const criaFilme = async (req,res)=>{
    const filme = new Filme({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        availableOn: req.body.availableOn,
        createdAt: req.body.createdAt
    })

    try {
        const novoFilme = await filme.save()
        res.status(201).json(novoFilme) 
    }catch (err){
        res.status(500).json({message:err.message})
    }

}

const listaFilmes = async (req, res)=> {
    const filme = await Filme.find()
    res.status(200).json(filmes)
}

const atualizaFilme =  async (req, res)=> {
    try {
        const filme = await Filme.findById(req.params.id)
        if (filme == null) {
            return res.status(400).json({ message: 'filme não encontrado!'})
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
            filme.availableOn = req.body.availableOn
        }

        if (req.body.createdAt != null) {
            filme.createdAt = req.body.createdAt
        }

        const filmeAtualizado = await Filme.save()
        res.json(filmeAtualizado)
    
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

const deletaFilme = async (req, res) =>{
    try{
        const filme = await Filme.findById(req.params.id)
        if (filme ==null) {
            return res.status(404).json({message: "Filme nao encontrado."})
        }

        await Filme.remove()
        res.json({message:"Filme deletado com sucesso!"})
    }catch (err) {
        return res.status(500).json({message: err.message})
    }
}

const listaUmfilme = async (req, res) => {
    const filme = await Filme.findById(req.params.id)

    if (filme ==null){
        return res.status(404).json({message: "Filme nao encontrado"})
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
