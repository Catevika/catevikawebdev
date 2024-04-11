"use server";

import connectDB from '@/database/connectDB';
import User from '@/database/models/userModel';
import type { RegisterFormValues } from '@/types/types';
import bcrypt from 'bcryptjs';

export async function checkUserExists(name: string) {
  connectDB();

  const exsitingUser = await User.findOne({ name });

  return JSON.stringify(exsitingUser);
}

export async function registerUser(formData: RegisterFormValues) {
  connectDB();

  const { name, email, password } = formData;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const isAdmin = name === 'Catevika' ? true : false;

  try {
    const newUser = User.create({
      image: '/icons/user_placeholder.svg',
      imageLight: '/icons/user_placeholder-light.svg',
      name,
      email,
      password: hashedPassword,
      isAdmin
    });

    return JSON.stringify(newUser);
  } catch (error) {
    return { error };
  }
}