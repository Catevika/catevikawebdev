import connectDB from '@/database/connectDB';
import User from '@/database/models/userModel';
import type { UserType } from '@/types/types';

export const getUsers = async () => {
  try {
    connectDB();
    const users: UserType[] = await User.find();
    if (!users) {
      return { error: 'Users not found' };
    }
    return users;
  } catch (error) {
    console.log(error);
    return { error: 'Failed to fetch users' };
  }
};

export const getUserById = async (_id: string) => {
  try {
    connectDB();
    const user: UserType | null = await User.findById({ _id });
    if (!user) {
      return { error: `User with id ${_id} not found` };
    }
    return user;
  } catch (error) {
    console.log(error);
    return { error: `Failed to fetch user ${_id}` };
  }
};