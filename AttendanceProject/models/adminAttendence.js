const {model,Schema}=require('mongoose');

const adminAttendenceSchema=new Schema({
    timeLimit:{
        type:Number,
        require:true,
        max:30,
        min:1,
        default:5
    },
    status: {
        type:String,
        require:true,
        enum:['RUNNING','COMPLETED'],
        default:'RUNNING'
    }
},{timestamps:true})

const AdminAttendence=model('AdminAttendence',adminAttendenceSchema);

module.exports=AdminAttendence;