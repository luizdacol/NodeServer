var app = require('express')();
var fs = require('fs');
var jogador = require('./model.js');

app.use(function(req, res, next){
    console.log('passou por aqui ' + Date.now());
    next();
})

app.get('/', function(req, res){
    res.send('Hello World!');
})

app.get('/player', function(req, res){
    var objJogador = jogador();

    objJogador.then(function(value){
        //res.setHeader('Content-type','application/json');
        res.send(value);
        
    });

});

app.listen(3000);

