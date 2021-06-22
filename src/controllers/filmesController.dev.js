"use strict";

var _require = require("express"),
    request = _require.request;

var Filme = require("../models/filme");

var criaFilme = function criaFilme(request, response) {
  var filme, novoFilme;
  return regeneratorRuntime.async(function criaFilme$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          filme = new Filme({
            title: req.body.title,
            description: req.body.description,
            type: req.body.type,
            available_on: req.body.available_on,
            created_at: req.body.created_at
          });
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(filme.save());

        case 4:
          novoFilme = _context.sent;
          response.status(201).json(novoFilme);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          response.status(400).json({
            message: _context.t0.message
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

var listaFilmes = function listaFilmes(req, res) {
  var filmes;
  return regeneratorRuntime.async(function listaFilmes$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Filme.find());

        case 2:
          filmes = _context2.sent;
          res.status(200).json(filmes);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var atualizaFilme = function atualizaFilme(req, res) {
  var filme, livroAtualizado;
  return regeneratorRuntime.async(function atualizaFilme$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Livro.findById(req.params.id));

        case 3:
          filme = _context3.sent;

          if (!(filme == null)) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: 'filme não encontrado!'
          }));

        case 6:
          if (req.body.title != null) {
            filme.title = req.body.title;
          }

          if (req.body.description != null) {
            filme.description = req.body.description;
          }

          if (req.body.type != null) {
            filme.type = req.body.type;
          }

          if (req.body.criadoEm != null) {
            livro.criadoEm = req.body.criadoEm;
          }

          _context3.next = 12;
          return regeneratorRuntime.awrap(livro.save());

        case 12:
          livroAtualizado = _context3.sent;
          res.json(livroAtualizado);
          _context3.next = 19;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: _context3.t0.message
          });

        case 19:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 16]]);
};