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


// import mongoose, { ConnectOptions } from 'mongoose';

// const uri = process.env.MONGODB_URI;

// if (!uri) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// declare global {
//   var mongoose: CachedConnection;
// }

// type CachedConnection = {
//   conn: typeof mongoose | null;
//   promise: typeof mongoose | null;
// };

// let cached: CachedConnection = global.mongoose;

// if (!cached) {
//   cached = { conn: null, promise: null };
// }

// async function connectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts: ConnectOptions = {
//       bufferCommands: false,
//     };

//     cached.promise = await mongoose.connect(uri!, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }

//   try {
//     cached.conn = cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// }

// export default connectDB;