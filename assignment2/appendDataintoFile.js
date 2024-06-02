

const http = require('http');
const  fs = require('fs');
const PORT = 4000 ;
//creating a server with simple get request which can append data into file named "data.txt" 
http.createServer(function (req, res) {
  fs.appendFile('data.txt', "\n this is second data while appending data into this file using node " , function(err) {
      if(err) {
        console.log(err) ; 
        throw new Error(err) ; 
      }
      console.log("data has been added successFully ") ; 
  });
  res.write("appending data into existing file without changing it content");
  return res.end();
}) 
.listen(4000 , () => {
    console.log(`server is listining on port ${PORT}`) ; 
})
