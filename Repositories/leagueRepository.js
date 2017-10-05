var arquivo = require('./../Infra/arquivo.js');
var leagueEntity = require('./../Entities/league.js');

var league = {
    consultar: (req, res) => {
        arquivo('./player.json')
            .then(function (data) {
                leagueEntity.id = data.league.id;
                leagueEntity.name = data.league.name;

                res.send(leagueEntity);
            },
            function (err) {
                console.log(err);
            });
    }
}

module.exports = league;