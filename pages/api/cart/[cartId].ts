import type { NextApiResponse, NextApiRequest } from "next/types";
const User = require("../../../models/user")

export async function handler (req: NextApiRequest, res: NextApiResponse){
    const {cartId} = req.query
    const {method} = req
    const {email} = req.body

    switch(method){
        case 'DELETE' : 

        // Always check if user is authenticated by req.body.id

        if(!cartId) res.status(400).json({"message": "Parameters required"})

        const result = await User.findOne({email: email}).exec()
        if(!result){
            res.status(403).json({"message": "No user found with that email"})
        }else{
            const check = await User.updateOne({email: email}, {$pull: {cart: {itemId: cartId}}})
            res.json(check) 
        }
        break;

        case "GET":
            res.json({"message": "This is not meant for get request"})

    }
}   