const mongoose  =  require('mongoose');
require('dotenv').config();

console.log(process.env.MONGODB_URL);

console.log()

const database =   ()=>{

      mongoose.connect(process.env.MONGODB_URL  , {

           useNewUrlParser:true,
           useUnifiedTopology:true
         
      })
      .then(()=>{
          console.log("db connection successfully");
      })
      .catch(()=>{
         console.log('db connection error');
         process.exit(1);

      })

}


module.exports =  database ;