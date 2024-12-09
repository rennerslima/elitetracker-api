import mongoose from 'mongoose';

const { MONGO_URL: mongoUrl } = process.env;

export async function setupMongo(): Promise<void> {
  try {
    if (mongoose.connection.readyState == 1) {
      return;
    }

    console.log('🎲 Connecting to database...');
    await mongoose.connect(String(mongoUrl), {
      serverSelectionTimeoutMS: 3000, ///3s
    });
    console.log('✅ Database connected !');
  } catch {
    throw new Error('❌ Database not conncted');
  }
}
