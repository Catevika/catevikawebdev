import mongoose from 'mongoose';

const Userschema = new mongoose.Schema({
  'image': {
    type: String,
    required: true,
    default: "/icons/user_placeholder.svg"
  },
  'imageLight': {
    type: String,
    required: true,
    default: "/icons/user_placeholder-light.svg"
  },
  'isAdmin': {
    type: Boolean,
    default: false
  },
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
  }
}, {
  timestamps: true
});

const User = mongoose.models?.User || mongoose.model('User', Userschema);

export default User;