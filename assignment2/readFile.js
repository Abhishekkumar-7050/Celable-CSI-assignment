
const http = require('http');
const  fs = require('fs');
const PORT = 4000 ;
//creating a server with simple get request which read data from file named "data.txt"  and sending data to frontend 
http.createServer(function (req, res) {
  fs.readFile('data.txt',  function(err ,data) {
      if(err) {
        console.log(err) ; 
        throw new Error(err) ; 
      }
      console.log("reading data form data.txt") ; 
      res.write(data);
      return res.end();
  });
 
}) 
.listen(4000 , () => {
    console.log(`server is listining on port ${PORT}`) ; 
})