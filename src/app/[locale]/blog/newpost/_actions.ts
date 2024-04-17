'use server';

import { auth } from '@/app/lib/auth';
import connectDB from '@/database/connectDB';
import Post from '@/database/models/postModel';
import User from '@/database/models/userModel';
import type { PostFormValues, UserType } from '@/types/types';
import { revalidatePath } from 'next/cache';

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
    const author: UserType | null = await User.findOne({ name: user.name });

    if (!author) return null;

    const newPost = await new Post({
      imageurl,
      title,
      content,
      author,
      isNew: true
    });
    await newPost.save();
    revalidatePath('/blog');
    return { newPost };
  } catch (error) {
    return { error };
  }
}

