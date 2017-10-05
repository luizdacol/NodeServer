var express = require('express');
var rotas = express.Router();
// var playerRepository = require('./../Repositories/playerRepository.js');
// var clanRepository = require('./../Repositories/clanRepository.js');
// var clanRepository = require('./../Repositories/clanRepository.js');

var repository = {
    player: require('./../Repositories/playerRepository.js')
    ,clan: require('./../Repositories/clanRepository.js')
    ,league: require('./../Repositories/leagueRepository.js')
};

console.log(repository);

rotas.get('/:id', repository.player.consultar);
rotas.get('/:id/clan', repository.clan.consultar);
// rotas.get('/:id/achievement', undefined);
 rotas.get('/:id/league', repository.league.consultar);
// rotas.get('/:id/troops', undefined);
// rotas.get('/:id/spell', undefined);
// rotas.get('/:id/heroes', undefined);

module.exports = rotas;