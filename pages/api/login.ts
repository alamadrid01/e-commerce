import type { NextApiRequest, NextApiResponse } from "next";
const User = require("../../models")

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const {email, password} = req.body


}