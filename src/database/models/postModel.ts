import User from '@/database/models/userModel';
import type { PostType } from '@/types/types';
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  'imageurl': String,
  'title': {
    type: String,
    required: true
  },
  'content': {
    type: String,
    required: true
  },
  'author': {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,  // Reference to the User model
    required: true
  }
}, {
  timestamps: true
});

const Post = mongoose.models?.Post || mongoose.model<PostType>('Post', PostSchema);

export default Post;

