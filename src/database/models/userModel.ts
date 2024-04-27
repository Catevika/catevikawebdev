import type { UserType } from '@/types/types';
import mongoose from 'mongoose';

const Userschema = new mongoose.Schema({
  'name': {
    type: String,
    required: true,
    unique: true
  },
  'email': {
    type: String,
    required: true
  },
  'password': {
    type: String,
    required: false
  },
  'isAdmin': {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const User = mongoose.models?.User || mongoose.model<UserType>('User', Userschema);

export default User;