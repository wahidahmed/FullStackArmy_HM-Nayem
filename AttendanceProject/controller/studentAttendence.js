
const StudentAttendence=require('../models/StudentAttendence');
const AdminAttendence=require('../models/AdminAttendence');
const{addMinutes,isAfter}=require('date-fns');

const error=require('../Utils/error')

const getAttendence= async (req,res,next)=>{
    console.log(req.params);
    const{id}=req.params;
    try {
        const adminAttendence=await AdminAttendence.findById(id);
        if(!adminAttendence){
            throw error('Invalid Attendece Id');
        }

        if(adminAttendence.status=='COMPLETED'){
            throw error('Attendce is coompleted',400);
        }

        let attendence=await StudentAttendence.findOne({adminAttendence:id,user:req.user._id});

        if(attendence){
            throw error('Attendence Alredy done',400);
        }
         attendence=new StudentAttendence({
            user:req.user._id,
            adminAttendence:id
        })

        await attendence.save();

        return res.status(201).json(attendence);
       
    } catch (e) {
       next(e); 
    }
}

const getAttendenceStatus=async (_req,res,next)=>{
    try {
        const running=await AdminAttendence.findOne({status:'RUNNING'});
        if(!running){
            throw error('Not running',400);
        }
        const started=addMinutes(new Date(running.createdAt),running.timeLimit);
        if(isAfter(new Date(),started)){
            running.status='COMPLETED';
            await running.save();
        }

        return res.status(200).json(running)
    } catch (e) {
        next(e);
    }
}

module.exports={
    getAttendence,
    getAttendenceStatus
}