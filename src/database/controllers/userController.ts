import connectDB from '@/database/connectDB';
import User from '@/database/models/userModel';

export const getUsers = async () => {
  try {
    connectDB();
    const users = await User.find();
    if (!users) {
      throw new Error('Users not found');
    }
    return users;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch users');
  }
};

export const getUserById = async (_id: string) => {
  try {
    connectDB();
    const user = await User.findById({ _id });
    if (!user) {
      throw new Error(`User with id ${_id} not found`);
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch user ${_id}`);
  }
};