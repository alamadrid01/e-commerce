import type {NextApiRequest, NextApiResponse} from "next";
const User = require("../../models/user");

export default async function handler (req: NextApiRequest, res: NextApiResponse){

    const { method } = req

    switch(method) {
        case 'GET': 
        const {productId, size, quantity} = req.body

        // Check if item is available in the database

        
    }
}