"use server";

import connectDB from '@/database/connectDB';
import User from '@/database/models/userModel';
import type { RegisterFormValues } from '@/types/types';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';

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
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin
    });

    await newUser.save();
    revalidatePath('/login');
  } catch (error) {
    return { error };
  }
}