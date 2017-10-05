var express = require('express');
var rotas = express.Router();
var playerRepository = require('./../Repositories/playerRepository.js');
var clanRepository = require('./../Repositories/clanRepository.js');

rotas.get('/:id', playerRepository.consultar);
rotas.get('/:id/clan', clanRepository.consultar);
// rotas.get('/:id/achievement', undefined);
// rotas.get('/:id/league', undefined);
// rotas.get('/:id/troops', undefined);
// rotas.get('/:id/spell', undefined);
// rotas.get('/:id/heroes', undefined);

module.exports = rotas;