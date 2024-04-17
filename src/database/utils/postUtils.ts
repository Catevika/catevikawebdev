"use server";

import connectDB from '@/database/connectDB';
import Post from '@/database/models/postModel';
import type { PostType } from '@/types/types';
import { ObjectId } from 'mongodb';
import { cache } from 'react';

export const getPosts = async () => {
  connectDB();
  const posts: PostType[] = await Post.find().populate('author').lean();
  return posts;
};

export const getPost = cache(async (id: string) => {
  connectDB();
  const postId = new ObjectId(id);
  const post: PostType | null = await Post.findOne({ _id: postId }).populate('author').lean();
  return post;
});

export const getAuthor = async (_id: ObjectId) => {
  connectDB();
  const post = await Post.findOne({ _id });

  const { author } = post;

  return author;
};