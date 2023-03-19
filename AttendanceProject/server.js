const express=require('express');

const app=express();

app.listen(4000,()=>{
    console.log('i am listening from port:4000');
})


app.get('/',(req,res,next)=>{
    res.send('thanks for your request');
});