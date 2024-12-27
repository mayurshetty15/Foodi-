import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://admin:admin123@cluster0.qh2uk.mongodb.net/foodi?retryWrites=true&w=majority').then(() => console.log("DB Connected"));
}