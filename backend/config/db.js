import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB connected');
    } catch (error) {
        console.error('Error connecting to DB:', error.message);
    }
};
