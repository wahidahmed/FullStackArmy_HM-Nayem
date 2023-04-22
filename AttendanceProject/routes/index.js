
const router=require('express').Router();
const authRoutes=require('./auth');
const userRoutes=require('./users');
const authenticate=require('../middleware/authenticate');

router.use('/api/v1/auth',authRoutes);
router.use('/api/v1/users',authenticate,userRoutes);// since we need auth for all types of user routes


module.exports=router;