import mongoose from 'mongoose';

export const connectMongoDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in the environment variables.");
        }
        await mongoose.connect(process.env.MONGODB_URI as string)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};