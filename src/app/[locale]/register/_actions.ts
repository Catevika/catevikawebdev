"use server";

import clientPromise from '@/database/db';
import type { RegisterFormValues } from '@/types/types';
import bcrypt from 'bcryptjs';

export async function checkUserExists(name: string) {
  const client = await clientPromise;
  const db = client.db('test');

  const exsitingUser = await db.collection('users').findOne({ name });

  return JSON.stringify(exsitingUser);
}

export async function registerUser(formData: RegisterFormValues) {
  const client = await clientPromise;
  const db = client.db('test');

  const { name, email, password } = formData;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const isAdmin = name === 'Catevika' ? true : false;

  try {
    const newUser = db.collection('users').insertOne({
      image: '/icons/user_placeholder.svg',
      imageLight: '/icons/user_placeholder-light.svg',
      name,
      email,
      password: hashedPassword,
      isAdmin
    });
    return { newUser };
  } catch (error) {
    return { error };
  }
}