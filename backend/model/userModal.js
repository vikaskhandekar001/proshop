import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userModal = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userModal.methods.matchPassword = async function(enteredPassWord){
  return await bcrypt.compare(enteredPassWord,this.password)
}

userModal.pre('save', async function(next){
  if(!this.isModified('password')){
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt);



})
const User = mongoose.model('User', userModal);
export default User;
