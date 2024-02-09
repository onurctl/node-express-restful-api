const express = require('express');
const server = express();

const data = require('./data.js');

// (/) for main page: localhost
server.get('/', (req, res) => {

res.send("Express'ten merhaba!");

});

// another endpoint:

server.get('/aktorler', (req, res) => {

    // chainable
    res.status(200).json(data);
    
    });

// veri alacağımız dizi ve içinde objeler
// (/:id) için hangi id no girilirse ona dair veri gelir, params

server.get('/aktorler/:id', (req, res) => {

    const {id} = req.params;

    // find() callback func: verideki her bir elemana denk gelen parametre
    
    // gelen id'yi ara, eşit olanı çek
    // params'tan string gelir, int yapılmalı kontrol için, çünkü int gelecek istekte

    const aktor = data.find(aktor => aktor.id == parseInt(id))
    
    // gelen id varsa, ona karşılık veriler aktor içine atanacak, yoksa undefined veya null?

    if(aktor) {
        res.status(200).json(aktor);
    } else {
        res.status(404).send("Veri bulunamadi...")
    }
    });
 
// 1st param: port, 2nd: method
server.listen(5000, () => {

console.log('http://localhost:5000 adresine gelen istekler dinleniyor...');

});