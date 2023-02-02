import { NextApiRequest, NextApiResponse } from "next";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/user")

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const {method} = req

    switch (method) { 
        case "GET" : 
            res.json({"message": "Trying to access the login API dude"})
        break

        case "POST" : 
        const { email, password} = req.body;
        // Check if there is email or password
        if(!email || !password){
            res.status(204).json({"message": "No data found"})
        }

        // Check the data in the database
        try{
            const data = await User.findOne({email: email}).exec()
            if(!data){
                res.status(309).json({"data": "No data found"})
            }else{
                // Un hash the password
                const match = await bcrypt.compare(password, data.password);
                // Check if the password is correct
                if(!match){
                    res.status(401).json({"message": "Password is incorrect"})
                }else{
                    res.status(200).json({data})
                }

            }
        }catch(err){
            console.error(err)
        }
        
        break

    }
}