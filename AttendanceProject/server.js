const express=require('express');
const connectDB=require('./db');
const User=require('./models/User');
const bcrypt=require('bcryptjs');

const app=express();

app.use(express.json())

app.post('/register',async (req,res)=>{
    const{name,email,password}=req.body;
    if(!name|| !email || !password){
        return res.status(400).json({message:'Invalid data'});
    }

  let user= await  User.findOne({email:email});
  if(user){
   return res.status(400).json({message:'user already exist'});
  }

  user=new User({
    name:name,
    email:email,
    password:password
  })
  await user.save();
  return res.status(201).json({message:'Successully User Created',user });
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
