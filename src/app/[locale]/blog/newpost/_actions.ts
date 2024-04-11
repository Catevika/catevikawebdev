'use server';

import { auth } from '@/app/lib/auth';
import connectDB from '@/database/connectDB';
import Post from '@/database/models/postModel';
import User from '@/database/models/userModel';
import type { PostFormValues } from '@/types/types';

export async function checkPostExists(title: string) {
  connectDB();

  const existingPost = await Post.findOne({ title });

  return JSON.stringify(existingPost);
}

export async function createNewPost(formData: PostFormValues) {
  const { imageurl, title, content } = formData;

  try {
    const session = await auth();
    if (!session) {
      return { error: 'You must be loggedin to create a new post' };
    }

    const user = session.user;
    if (!user) {
      return { error: 'Something went wrong when logging in' };
    }

    connectDB();
    const author = await User.findOne({ name: user.name });

    const newPost = await Post.create({
      imageurl,
      title,
      content,
      author
    });
    return JSON.stringify(newPost);
  } catch (error) {
    return { error };
  }
}

