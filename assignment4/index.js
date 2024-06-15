const express = require('express') ; 
const app = express() ; 
const mainRouter = require('./routers/index') ; 
require("dotenv").config() ;


//basic middlewares , used for configuration of app 
app.use(express.json({limit:'20mb'})) ;

// home endpoint to check whether server is working fine or not 
app.get('/' , (req , res) => {
    res.status(200).send("Happy to sever you ...") ; 
})


//connecting main router with index file 
//here api is first end point to access any api 
app.use('/api' , mainRouter) ; 

const PORT = process.env.PORT ; 

app.listen(PORT || 40001 , () => {
    console.log(`server is listing on port ${PORT}`); 
})