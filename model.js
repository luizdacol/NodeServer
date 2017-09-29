var fs = require('fs');
var q = require('q');

function jogador(){
    var deferred = q.defer();
    fs.readFile('player.json', function(err, file){
        if(err != null) deferred.reject(err);
        else deferred.resolve(file.toString());
    })
    return deferred.promise;
}

// function teste(){
//     return fs.readFileSync('player.json', 'utf-8');
// }

//jogador().then(function(x){console.log(x);})

//console.log(jogador());
module.exports = jogador;