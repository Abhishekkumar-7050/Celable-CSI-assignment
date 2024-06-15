// this middleware check whether user is logged in or not 
module.exports  =  async (req , res , next) => {
    try {
        const isLoggedIn = true  ; 
        if(isLoggedIn) {
            console.log("from middleware : " , "user is logged in " ) ; 
            next() ; 
        }
        else {
            return res.status(404).send("user is not logged in , please log in first to access these api") ; 
        }
    } catch (error) {
        console.log("error in middleware : " , error) ; 
        return res.status(500).send("internal server error" , error.message) ; 
    }
    /// apply bussiness logic for checking user logged in or nor 
    //eg. check req has JWT token or not 
}