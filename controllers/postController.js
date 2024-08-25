const Post  =   require('../models/postModel');

exports.createPost =  async(req,res)=>{
      try{
               const{title , body} =  req.body;

               const post = new  Post({
                     title , body
               })

               const savePost = await post.save();

               res.json({
                message: "success",
                post: savePost
            });
           

      }
      catch(error){
        
        
        res.status(500).json({
            message: "fail",
            error: error.message
        });


      }
}