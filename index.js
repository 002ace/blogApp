const express =   require('express');
const app = express();
app.use(express.json())

const PORT  =  process.env.PORT || 4000 ;



const route =  require('./routes/modelRoutes');

app.use('/api/v2' , route)

app.listen(PORT , ()=>{

      console.log(`server started at  ${PORT}`)

})


const dbConnect =  require('./config/databse');
dbConnect();