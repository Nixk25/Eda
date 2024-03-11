import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("Error: " + error);
  }
};
