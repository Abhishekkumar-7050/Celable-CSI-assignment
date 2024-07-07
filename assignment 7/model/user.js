const mongoose = require('mongoose') ;

const userSchema = mongoose.Schema({
    email :{
        type:String , 
        required: true , 
        unique:true , 
        lowercase:true 
    } , 
    password:{
        type:String , 
        required:true,
        select : false  
    },
    name:{
        type:String , 
        required:true 
    } , 
    bio: {
        type:String 
    } ,
    avatar : {
        // public id is unique id of that image 
        publicId:String , 
        // url will be url of that image which can be obtain from coludnary 
        url:String 
    }, 
    followers : [
        // array of object id 
        {   // type will store id of that user 
            type : mongoose.Schema.Types.ObjectId ,
            // ref will refer to that user 
            // this is how we relate two users or collections 
            ref : 'user'
        }
    ] , 
    followings:[
         {// type will store id of that user 
         type : mongoose.Schema.Types.ObjectId ,
         // ref will refer to that user 
         // this is how we relate two users or collections 
         ref : 'user'}
    ] , 
    posts : [
         {// type will store id of that user 
            type : mongoose.Schema.Types.ObjectId ,
            // ref will refer to that user 
            // this is how we relate two users or collections 
            ref : 'post'}
    ]
},{
    timestamps: true
}) ; 

module.exports = mongoose.model("user" , userSchema)