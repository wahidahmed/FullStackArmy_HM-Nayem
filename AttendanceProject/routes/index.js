
const router=require('express').Router();
const authRoutes=require('./auth');
const userRoutes=require('./users');
const studentAttendenceRoutes=require('./studentAttendence');
const admiAttendenceRoutes=require('./adminAttendence');
const authenticate=require('../middleware/authenticate');

router.use('/api/v1/auth',authRoutes);
router.use('/api/v1/users',authenticate,userRoutes);// since we need auth for all types of user routes
router.use('/api/v1/admin/attendence',authenticate,admiAttendenceRoutes);
router.use('/api/v1/student/attendence',authenticate,studentAttendenceRoutes);

module.exports=router;