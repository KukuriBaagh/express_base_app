import mongoose from 'mongoose';

// step 1 to connect to mongodb server

try {
  await mongoose.connect('mongodb://localhost:27017/');
  mongoose.set('debug', true);
} catch (error) {
  console.error(error);
  process.exit();
}

// step 2: create schema

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});
