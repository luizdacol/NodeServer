var app = require('express')();
var playerRoutes = require('./Routes/player');

app.use(function(req, res, next){
    // console.log('passou por aqui ' + (new Date()).toISOString());
    // console.log('passou por aqui ' + (new Date()).toUTCString());
    console.log('passou por aqui ' + (new Date()).toLocaleString());
    next();
})

app.use('/player',playerRoutes);

// app.get('/', function(req, res){
//     res.send('Hello World!');
// })

// app.get('/player', function(req, res){
//     var objJogador = jogador();

//     objJogador.then(function(value){
//         //res.setHeader('Content-type','application/json');
//         res.send(value);
        
//     });

// });

app.listen(3000);

