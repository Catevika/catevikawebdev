import mongoose from 'mongoose';

export const connectDB = () => {
  if (!process.env.MONGODB_URI) {
    return { error: 'Invalid environment variable: "MONGODB_URI"' };
  }

  const uri = process.env.MONGODB_URI;

  const existingConnection = mongoose.connections[0].readyState;

  if (existingConnection) {
    console.log('Use existing MongoDB connection');
    return null;
  }

  try {
    mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    return { error: 'MongoDB failed to connect' };
  }
};

export default connectDB;
