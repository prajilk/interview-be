import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

function createToken(req: Request, res: Response) {
    // @ts-ignore
    const id = req.id

    const token = jwt.sign({
        id: id,
    }, process.env.TOKEN_SECRET!, {
        expiresIn: "1d"
    })

    res.status(200).json({ token, message: "Token created successfully" })
}

export { createToken }