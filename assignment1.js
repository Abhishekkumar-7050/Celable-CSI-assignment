///here is a quick demo for simple hello world app 
// importing https server 
const http = require('http');

// creating server using http module 
http.createServer( (req, res)=> {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(4000 , ()=> {
    // listing on server 4000 
    console.log("listing on port " , 4000) ; 
});