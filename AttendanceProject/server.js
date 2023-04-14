const express=require('express');
const connectDB=require('./db');
const User=require('./models/User');
const bcrypt=require('bcryptjs');

const app=express();

app.use(express.json())
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).json({message:'Server error occured'})
})

app.post('/register',async (req,res,next)=>{
    const{name,email,password}=req.body;
    if(!name|| !email || !password){
        return res.status(400).json({message:'Invalid data'});
    }
    try {
        
            let user= await  User.findOne({email:email});
            if(user){
            return res.status(400).json({message:'user already exist'});
            }

            user=new User({
                name:name,
                email:email,
                password:password
            })

            const salt= await bcrypt.genSalt(10);
            const hash= await bcrypt.hash(password,salt);

            user.password=hash;

            await user.save();
            return res.status(201).json({message:'Successully User Created',user });
    } 
    catch (error) {
        next(error);
    }
})

app.post('/login',async(req,res,next)=>{
    const{email,password}=req.body;
    try {
      const user=  await User.findOne({email});
      if(!user){
        return res.status(400).json({message:'Invalid Credential'});
      }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({message:'Invalid Credential'});
    }

    delete user._doc.password;// Since we provide user detail with successfull message so delete the password because we dont provide hash password to user
    return res.status(200).json({message:'Login successfull',user});
    } catch (e) {
        next(e);
    }
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
