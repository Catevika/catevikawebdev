import type { PostType } from '@/types/types';
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  '_id': {
    type: String,
    required: true
  },
  'imageurl': String,
  'title': {
    type: String,
    required: true
  },
  'subtitle': {
    type: String,
    required: true
  },
  'author': {
    type: String,
    required: true
  },
  'credits': {
    type: String,
    required: true
  },
  'tags': {
    type: [String],
    required: true
  },
  'content': {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Post = mongoose.models?.Post || mongoose.model<PostType>('Post', PostSchema);

export default Post;

