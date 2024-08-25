const Comment =  require('../models/commentModel');

const Post =  require('../models/postModel');


exports.createComment = async(req,res)=>{
      try{

             const{post , user , body} =  req.body;

             const comment =  new Comment({
                  post , user , body

             })

             const saveComment =  await comment.save() ;

             const updatePost  =  await Post.findByIdAndUpdate(post , {$push  : {comments : saveComment._id}} , {new:true})
                                  .populate('comments').exec();

                                  res.json({
                                    message: "success",
                                    comment: saveComment,
                                    updatedPost: updatePost
                                });


      }
      catch(error){
           
        res.status(500).json({
            message: "fail",
            error: error.message
        });

           
      }
}