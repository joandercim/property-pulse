import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true); // Den här ser till att bara det som finns i schemat blir sparat i databasen

  // If the database is already connected, don't connect again.

  if (connected) {
    console.log('MongoDB is already connected');
    return;
  }

  // Connect to mongoDB

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('MongoDB connected.');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
