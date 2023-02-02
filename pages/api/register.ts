const User = require('../../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest , res: NextApiResponse){
    if(req.method === 'POST'){
        const { fullName, email, password } = req.body
        // Check if all fields are filled   
        if(!fullName || !email || !password) return res.status(400).json({"error": "Please fill all fields"})

        // Check if the user already exists
        const duplicate = await User.findOne({email: email}).exec();
        if(duplicate) return res.status(409).json({"error": "Duplicate file found"})
        
        try{
            // Hash the password
            const salt = await bcrypt.hash(password, 10);
            
            // Create a new user
            const result = await User.create({
                "firstname": fullName,
                "lastname": fullName,
                "email": email,
                "password": salt
            })
            console.log(result)
            res.status(200).json({ 'success': `New user ${fullName} created`})
        }catch(err){
            res.status(400).json({error: err})
        }
    } else if(req.method ==='GET') {
        res.status(200).json({ name: 'Testing a data' })
    } else {
        res.status(400).json({ message: 'Bad Request' })
    }
}
// Test-run22