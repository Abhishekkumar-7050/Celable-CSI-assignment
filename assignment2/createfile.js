
const http = require('http');
const  fs = require('fs');
const PORT = 4000 ;
//creating a server with simple get request which can create a file named "data.txt" , and writing some data init
http.createServer(function (req, res) {
  fs.writeFile('data2.txt', "this is first data which added while creating this file using node " , function(err) {
      if(err) {
        console.log(err) ; 
        throw new Error(err) ; 
      }
      console.log("file has been created successFully with data ") ; 
  });
  res.write("creating a file and also writing some data init");
  return res.end();
}) 
.listen(4000 , () => {
    console.log(`server is listining on port ${PORT}`) ; 
})
