
const AdmiAttendence=require('../models/AdminAttendence');
const error=require('../Utils/error');
const {addMinutes,isAfter}=require('date-fns');

const getStatus=async (req,res,next)=>{
    try {
        const running=await AdmiAttendence.findOne({status:'RUNNING'});
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

const getEnable=async (_req,res,next)=>{
    try {
        const running=await AdmiAttendence.findOne({status:'RUNNING'});
        if(running){
            throw error('Already running',400);
        }
        const attendence=new AdmiAttendence({});
        
        await attendence.save();
        return res.status(201).json({message:'success',attendence});
    } catch (e) {
        next(e);
    }
}

const getDisable=async (_req,res,next)=>{
    try {
        const running=await AdmiAttendence.findOne({status:'RUNNING'});
        if(!running){
            throw error('Not running',400);
        }

        running.status='COMPLETED';
        await running.save();
        return res.status(200).json(running)
    } catch (e) {
        next(e);
    }
}

module.exports={
    getEnable,
    getDisable,
    getStatus
}