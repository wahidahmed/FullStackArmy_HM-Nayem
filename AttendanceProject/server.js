const express=require('express');
const connectDB=require('./db');
const authentcate=require('./middleware/authenticate');
const routes=require('./routes/index');

const app=express();
app.use(express.json())
app.use(routes);

app.use((err,req,res,next)=>{
    console.log('err',err);
    const message=err.message?err.message:'Serve error occured';
    const status=err.status?err.status:500;
    res.status(status).json({message:message})
})



app.get('/private',authentcate,(req,res)=>{
   res.status(200).json({message:'I am private route'});
})

connectDB('mongodb://localhost:27017/attendance-db')
.then(()=>{
    console.log('database connected');
    app.listen(4000,()=>{
        console.log('i am listening from port:4000');
    })

}).catch((e)=>{
    console.log(e);
})
