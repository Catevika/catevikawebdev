import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
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
  'username': {
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
  forgotPassWordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date
}, {
  timestamps: true
});

const User = mongoose.models?.User || mongoose.model('User', UserSchema);

export default User;