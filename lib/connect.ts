import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export default async function ConnectDB(url: any) {
    mongoose.set('strictQuery', true)
  try {
    await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
  } catch (err) {
    console.error(err);
  }
}
