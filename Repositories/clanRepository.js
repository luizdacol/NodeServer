var arquivo = require('./../Infra/arquivo.js');
var clanEntity = require('./../Entities/clan.js');

var clan = {
    consultar: (req, res) => {
        arquivo('./player.json')
            .then(function (data) {
                clanEntity.tag = data.clan.tag;
                clanEntity.name = data.clan.name;
                clanEntity.level = data.clan.clanLevel;

                res.send(clanEntity);
            },
            function (err) {
                console.log(err);
            });
    }
}

module.exports = clan;