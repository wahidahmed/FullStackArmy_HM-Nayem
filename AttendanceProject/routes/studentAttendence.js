
const router=require('express').Router();
const {getAttendence,getAttendenceStatus}=require('../controller/studentAttendence')

router.get('/status',getAttendenceStatus);
router.get('/:id',getAttendence);

module.exports=router;