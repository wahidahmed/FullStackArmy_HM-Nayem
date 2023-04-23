const {model,Schema}=require('mongoose');

const studentAttendenceSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    adminAttendence:{
        type:Schema.Types.ObjectId,
        ref:'AdminAttendence',
        required:true
    }
},{timestamps:true})

const StudentAttendence=model('StudentAttendence',studentAttendenceSchema);

module.exports=StudentAttendence;