import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest , res: NextApiResponse){
    if(req.method === 'POST'){
        const { name, email, password } = req.body
        console.log(name, email, password)
        res.status(200).json({ name, email, password })
    } else if(req.method ==='GET') {
        res.status(200).json({ name: 'Testing a data' })
    } else {
        res.status(400).json({ message: 'Bad Request' })
    }
}