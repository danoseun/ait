import express from 'express';
import { userValidator } from '../middleware/user';
import { verifyToken } from '../middleware/auth';
import { userController } from '../controllers/user';
import { commentController } from '../controllers/comment';

const { registerUserValidator, loginUserValidator } = userValidator;

const { registerUser, loginUser } = userController;
const {
  addComment, getAllComments, updateComment, deleteComment
} = commentController;

export const router = express.Router();

router.post('/register', registerUserValidator, registerUser);
router.post('/login', loginUserValidator, loginUser);
router.post('/comments', verifyToken, addComment);
router.get('/comments', getAllComments);
router.patch('/comments/:commentId', verifyToken, updateComment);
router.delete('/comments/:commentId', verifyToken, deleteComment);
