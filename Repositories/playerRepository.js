var playerEntity = require('./../Entities/player.js');
var arquivo = require('./../Infra/arquivo.js');

var player = {
    consultar: (req, res) => {
        arquivo('./player.json')
            .then(function (data) {
                playerEntity.tag = data.tag;
                playerEntity.name = data.name;
                playerEntity.townHall = data.townHallLevel;
                playerEntity.clanTag = data.clan.tag;
                playerEntity.xp = data.expLevel;
                playerEntity.trophies = data.trophies;
                playerEntity.donations = data.donations;
                playerEntity.donationsReceived = data.donationsReceived;

                res.send(playerEntity);
            },
            function (erro) {
                console.log(erro);
            });
    }
}

module.exports = player;