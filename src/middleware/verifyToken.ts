import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

function verifyToken(req: Request, res: Response, next: NextFunction): void {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
        try {
            const decoded = jwt.verify(
                token,
                process.env.TOKEN_SECRET!
            );

            if (typeof decoded === "string") {
                throw new Error();
            }

            // @ts-ignore
            req.user = decoded.id;

            next()
        } catch (error) {
            res.status(403).json({ message: "Invalid signature" })
            return;
        }
    } else {
        res.status(403).json({ message: "Auth token is missing!" })
        return;
    }
}

export { verifyToken }