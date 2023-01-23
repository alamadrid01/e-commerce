const User = require('../../models/user')

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest , res: NextApiResponse){
    if(req.method === 'POST'){
        const { fullName, email, password } = req.body
        // console.log(fullName, email, password)
        const duplicate = await User.findOne({email: email}).exec();
        if(duplicate) return res.status(409).json({"error": "Duplicate file found"})
        
        try{
            const result = await User.create({
                "firstname": fullName,
                "lastname": fullName,
                "email": email,
                "password": password
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