const express = require('express');
const router =  express.Router();



const{createComment} =  require('../controllers/commentController')
const {createPost} =  require('../controllers/postController');
const{createLike  }  =  require('../controllers/likeController')
const{unLike} =  require('../controllers/likeController')


router.post('/createComment' , createComment);
router.post('/createPost'  ,  createPost);
router.post('/createLike' , createLike);
router.post('/unLike' , unLike);

module.exports =  router