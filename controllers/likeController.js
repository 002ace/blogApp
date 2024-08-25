const Post  = require('../models/postModel');

const Like  =  require('../models/likeModel');


exports.createLike = async(req,res)=>{
       try{

             const {post ,user} =  req.body;

             const savePost =  await Like.create({post , user});


             const updateLike  = await Post.findByIdAndUpdate(post , {$push : {likes:savePost._id}} , {new:true}).populate('likes').exec()


             res.json({
                message: "success",
                Likepost: updateLike
            });


       }
       catch(error){

        res.status(500).json({
            message: "fail",
            error: error.message
        });

       }
}



exports.unLike =  async(req, res)=>{
       try{
                const{post , like } = req.body ;

                const deleteLike  = await Like.findOneAndDelete({post:post , _id:like});

                const updatedPost =  await Post.findByIdAndUpdate(post , {$pull : {likes:deleteLike._id}} , {new:true}).populate("likes").exec();
                
                res.json({
                    message: "success",
                    post: updatedPost
                });
       }
       catch(error)
       {
             res.status(500).json({
                   message: "fail",
                     error: error.message
               });
       }
}


