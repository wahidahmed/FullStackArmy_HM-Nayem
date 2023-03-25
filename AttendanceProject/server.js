const express=require('express');

const app=express();

app.listen(4000,()=>{
    console.log('i am listening from port:4000');
})


app.get('/',(req,res,next)=>{
    res.send('thanks for your request');
});

const {model,Schema}=require('mongoose');

const studentAttendenceSchema=new Schema({
    createdAt: Date,
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    adminAttendence:{
        type:Schema.Types.ObjectId,
        ref:'AdminAttendence'
    }
})

const StudentAttendence=model('StudentAttendence',studentAttendenceSchema);

module.exports=StudentAttendence;