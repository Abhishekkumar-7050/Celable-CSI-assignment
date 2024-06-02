
const http = require('http');
const  fs = require('fs');
const PORT = 4000 ;
//creating a server with simple get request which can file  "data2.txt"  
http.createServer(function (req, res) {
  fs.unlink('data2.txt', function(err) {
      if(err) {
        console.log("error occur while deleting file " , err) ; 
        throw new Error(err) ; 
      }
      console.log("file deleted successfully") ; 
  });
  res.write("file deleted successfully");
  return res.end();
}) 
.listen(4000 , () => {
    console.log(`server is listining on port ${PORT}`) ; 
})
