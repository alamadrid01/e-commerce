import connectDB from "../../lib/connect";
import dotenv from "dotenv";

// import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

dotenv.config();
// const PORT = process.env.PORT || 4000

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await connectDB(process.env.MONGODB_URI).then(() => {
    console.log("connected successfully")
  });
  switch (method) {
    case "GET":
      res.status(200).json({ test: "Testing" });
  }
}
