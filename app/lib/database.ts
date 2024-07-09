import mongoose from 'mongoose';

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    const uri = 'mongodb+srv://instantfameserver:OB9EzPjPWgWSD60t@denox-1.ourulon.mongodb.net/?retryWrites=true&w=majority&appName=denox-1';

    await mongoose.connect(uri);
    
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}
