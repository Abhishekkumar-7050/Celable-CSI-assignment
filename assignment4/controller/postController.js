const {success , error} = require('../utils/responseWrapper')  ;

const getAllPostController = (req ,res) => {
    try {
        // fetch id of user from req and find its post from data base 
        //but right now we dont have any DB so simply return a response 
        return res.status(200).send(success(200, "here is all post")) ; 
    } catch (err) {
        return res.status(500).send(error(500 , err.message)) ; 
    }
}

module.exports = {getAllPostController} ; 