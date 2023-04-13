import express from 'express';
import userController from '../controllers/User';

const router = express.Router();

router.post('/create', userController.createUser);
router.post('/auth/', userController.readUserByName);
router.get('/get/:userId', userController.readUser);
router.get('/get/', userController.readAllUsers);
router.patch('/update/:userId', userController.updateUser);
router.delete('/delete/:userId', userController.deleteUser);

export = router;
