import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export default async function ConnectDB(url: any) {
    mongoose.set('strictQuery', true)
  mongoose.connect(process.env.MONGO_URI, () => {
      console.log("Testing connection")
    })
}
