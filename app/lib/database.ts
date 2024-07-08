import mongoose from 'mongoose';

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    const uri = 'mongodb+srv://myapp:laszlo761938@cluster0.mz1jkvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

    await mongoose.connect(uri);
    
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}
