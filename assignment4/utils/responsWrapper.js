
const success = ( status  , data) => {
    return {
        status:"ok" , 
        statusCode:status, 
        data 
    }
}

const error = (status , data) => {
    return {
        status:"failure",
        satusCode:status , 
        message :data
    }
}
module.exports = {
    success , error 
}