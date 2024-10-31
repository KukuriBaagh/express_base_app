import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
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
    cpassword: {
      type: String,
      required: true,
    },

    phone: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = new mongoose.Model('User', userSchema);

export default User;
