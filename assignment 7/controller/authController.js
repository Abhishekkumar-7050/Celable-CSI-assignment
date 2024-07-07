const User = require('../models/User') ; 
const jwt = require('jsonwebtoken') ; 
const dotenv  = require('dotenv') ; 
const {error,success} = require('../utils/responseWrapper') ; 
const bcrypt = require('bcrypt');
// dotenv.config('./.env') ;
// controllers 
const signupController = async (req , res) =>{
     //res.send('from signup controller') ; \
     try {
        const { name, email , password } = req.body;
        if (!email || !password || !name) {
          // res.status(400).send("email and passwords are required");
        return   res.send(error(400 , "all fields are required"));      
        }
        // check for user is already present or not 
        const oldUser = await User.findOne({ email });
        if (oldUser) {
          //  res.status(409).send("email id is already registerd");
           return res.send(error(409 , "email id is already registerd"));
        }
        // encrypt the passsword 
        const hashedPassword = await bcrypt.hash(password, 10);
        // creating user in mongo db 
        const user = await User.create({
            name , 
            email,
            password: hashedPassword 
        });
        return res.send(success(200 , "user successfully created"  ))  ;   
    } catch (e) {
      //  console.log(error)
      return res.send(error(500 , e.message)) ; 
    }
}

const loginController = async (req , res) =>{
   // res.send('log in controller') ; 
   try {
    const { email, password } = req.body;
    // check user send email and passwrd or not 
    if (!email || !password) {
        //return res.status(404).send("email and password are required");
        return res.send(error(404 , "email and password are required" ) );   
    }
    // fetch data from database 
    const user = await User.findOne({ email }).select('+password');
    // check for email 
    if (!user) {
       /// return res.status(402).send("user is not found");
       return res.send(error(404 , "user is not found" ) );
    }
    // match hashed password with the curr password' 
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
       //// return res.status(403).send("incorrect password");
       return res.send(error(403 , "incorrect password"));
    }
    const accessToken = generateAccessToken({
        _id:user._id
    });
    const refreshToken = generateRefreshToken({
        _id:user._id
    }) ; 
     // we hve to save refresh token inside the cookie
    res.cookie('jwt', refreshToken , {
        httpOnly :true , 
        secure : true ,
        sameSite: 'none'
     } );
    /// if evrthing is fine the send data of user 
    // return res.status(200).json({
    //     accessToken 
    // });

    return res.send(success(200 , {
        accessToken   
    } ) );
} 
    catch (e) {
    // console.log(error);
    return res.send(error(500 , e.message)) ; 
    }
}
 


// internal function 
const generateAccessToken = (data) => {
    try {     
        const token = jwt.sign(data, process.env.ACCESS_TOKEN_PRIVATE_KEY , {
            expiresIn:"1y"
        });
         // console.log("token is :  " , token) ;      
        return token;
    } catch (e) {
       // console.log("error is ", error);
       return res.send(error(500 , e.message)) ; 
        
    }
}

module.exports = {
    signupController , loginController
}