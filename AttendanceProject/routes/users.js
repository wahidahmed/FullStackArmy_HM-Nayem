
const router=require('express').Router();

const userController=require('../controller/users')


router.get('/:userId',userController.getUserById)

router.put('/:userId',userController.putUserById)
router.patch('/:userId',userController.patchUserById)

router.delete('/:userId',userController.deleteByUserId);

router.get('/',userController.getUsers);

router.post('/',userController.postUser);


module.exports=router;