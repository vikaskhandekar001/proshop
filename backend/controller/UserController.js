import User from '../model/userModal.js';
import asyncHandler from '../middleware/asyncHandler.js';
import generateToken from '../utils/generateToken.js';
import {json} from 'express';
//@desc login user and authentication
//@route POST /api/user/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('invalid email or password');
  }
});

//@desc register user
//@route POST /api/user/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body;

  const userExists = await User.findOne({email});

  if (userExists) {
    res.status(400);
    throw new Error('User already Exists');
  }

  const user = await User.create({name, email, password});

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid User');
  }
});

//@desc logout user & clear the cookie
//@route POST /api/user/logout
//@access private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({message: 'Logged out successfully'});
});

//@desc get user profile
//@route GET /api/user/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = User.findById(req.user_id);
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//@desc update user profile
//@route PUT /api/user/update
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
  //get the user
  const user = User.findById(req.user_id);
  //update the data
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    //handle error
    res.status(404);
    throw new Error('No user found');
  }
});

//@desc get all user
//@route GET /api/users
//@access private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('get all users profile');
});

//@desc get all user
//@route Delete /api/user/:id
//@access private/Admin

const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user profile');
});

//@desc get all user
//@route GET /api/users/:id
//@access private/Admin

const getUserById = asyncHandler(async (req, res) => {
  res.send('get user by id');
});

//@desc update uer
//@route PUT /api/users/:id
//@access private/Admin

const updateUser = asyncHandler(async (req, res) => {
  res.send('get user by id');
});

export {
  authUser,
  getUserById,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
};
