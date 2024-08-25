
const mongoose  = require('mongoose');

const postSchema =  new mongoose.Schema({
        title:{

        },
        body:{

        },
        comments:[{
              type:mongoose.Schema.Types.ObjectId,
              ref:'Comment'
        }],

        likes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Like'
        }]

})


module.exports =  mongoose.model('Post' , postSchema)