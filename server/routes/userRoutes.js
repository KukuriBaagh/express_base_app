import express from 'express';
import { authUser, registerUser } from '../controllers/userControllers.js';

const userRouter = express.Router();

userRouter.post('/auth', authUser);
userRouter.post('/register', registerUser);

export default userRouter;
