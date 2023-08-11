import express from 'express';
import {
  authUser,
  getUserById,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
} from '../controller/UserController.js';

import { protect,admin } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').get(protect,admin,getUsers).post(registerUser);
router.post('/login',authUser);
router.post('/logout',logoutUser);
router.post('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)
router.route('/:id').get(protect,admin,getUserById).delete(protect,admin,deleteUser).put(protect,admin,updateUser)

export default router;
