// const mongoose=require('mongoose');
const {model,Schema}=require('mongoose');

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        minlength:5
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(v){
                let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
                return regex.test(v);;
            },
            message:(prop)=>`Invalid email: ${prop.value}`
        }
    },
    password:{
        type:String,
        minlength:[3,'password is too short'],
        // maxlength:[6,'password is too long'],
        required:true
    },
    roles:{
        type:[String],
        required:true,
        default:['STUDENT']
    },
    accountStatus:{
        type:String,
        enum:['PENDING','ACTIVE','REJECT'],
        default:'PENDING',
        required:true,
    }
})

const User=model('User',userSchema);

module.exports=User;
