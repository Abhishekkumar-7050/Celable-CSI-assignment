const router = require('express').Router() ; 
const postController = require('../controllers/postController') ; 
const requireUser = require('../middlewares/requireUser') ; 

// protected route
router.get('/getAllPost' , requireUser ,  postController.getAllPostController) ; 

module.exports = router ; 