"use server";

import connectDB from '@/database/connectDB';
import User from '@/database/models/userModel';
import type { RegisterFormValues } from '@/types/types';
import bcrypt from 'bcryptjs';

export async function checkUserExists(username: string) {
  connectDB();

  const exsitingUser = await User.findOne({ username });

  return JSON.stringify(exsitingUser);
}

export async function registerUser(formData: RegisterFormValues) {
  connectDB();

  const { username, email, password } = formData;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const newUser = await User.create({
      image: '/icons/user_placeholder.svg',
      imageLight: '/icons/user_placeholder-light.svg',
      username,
      email,
      password: hashedPassword,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return JSON.stringify(newUser);
  } catch (error) {
    return { error };
  }
}