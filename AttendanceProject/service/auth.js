

const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const error=require('../Utils/error');
const{findUserByProperty,createNewUser}=require('./user');

const registerService=async ({name,email,password,roles,accountStatus})=>{
    let user= await  findUserByProperty('email',email);
    if(user){
      throw error('User already exist',400);
    
    }

    const salt= await bcrypt.genSalt(10);
    const hash= await bcrypt.hash(password,salt);

    return createNewUser({name,email,password:hash,roles,accountStatus});

   
}

const loginService= async({email,password})=>{
 
    const user= await findUserByProperty('email',email);
    console.log('illegal',user.password)
    if(!user){
      throw error('Invalid Credential',400);
    }
  const isMatch=await bcrypt.compare(password,user.password);
 
  if(!isMatch){
    throw error('Invalid Credential',400);
  }

  // delete user._doc.password;

  const payload={
    _id:user._id,
    name:user.name,
    email:user.email,
    roles:user.roles,
    accountStatus:user.accountStatus
  }

  // const token =jwt.sign(user._doc,'secret-key',{expiresIn:'2h'});
  return jwt.sign(payload,'secret-key',{expiresIn:'2h'});
}

module.exports={
    registerService,
    loginService
}