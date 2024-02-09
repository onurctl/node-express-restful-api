const http = require('http'); // from node_modules

// react'ta import kullandık babel kullandığımız için, burada ES6 kurmadığımız için require

//

const host = '127.0.0.1'; // host'un çalışacağı adres
const port = 3000;        // adrese erişeceği port

const server = http.createServer((istek, cevap)=> {
// 1 callback function, 2 params: request, response

cevap.statusCode = 200; // yapılan işlem başarılı
cevap.setHeader('Content-Type', 'text/plain');
cevap.end('Cevabi goruntuluyorsunuz...')

});

//

// server'ın isteklere cevap vermesi için: listen()
// another callback func here:

server.listen(port, host, ()=>{
console.log(`http://${host}:${port} adresinden gelen veriler dinleniyor.`)
// (`) ters tırnak kullanılmazsa $... bölümü görünmez

});