const jwt = require('jsonwebtoken') ; 
const dotenv = require('dotenv') ; 
const { success, error } = require('../utils/responseWrapper');
const User = require('../models/User');
dotenv.config('./.env') ;

module.exports = async (req, res, next) => {
    // console.log("i am inside the middleware ") ; 
    if (!req.headers || !req.headers.authorization || !req.headers.authorization.startsWith("Bearer")) {   
        // return res.status(401).send("authorization header is required");
        return res.send(error(401 , "authorization header is required")) ; 
    }
  //  console.log(req.headers.authorization) ; 
    const accessToken = req.headers.authorization.split(' ')[1] ; 
   // console.log('token is : ' , accessToken) ; 
   try {
        const decode = jwt.verify(accessToken ,
             process.env.ACCESS_TOKEN_PRIVATE_KEY
             ) ; 
             req._id = decode._id ; 

             const user = await User.findById(req._id) ; 
             if(!user) {
              return res.send(error(404 , "user is not found")) ; 
             }
             next() ; 

   } catch (e) {
        console.log(e) ; 
      //  res.status(401).send("invalid access key ") ; 
      return res.send(error(401 , "invalid access key")) ;  
   }
}