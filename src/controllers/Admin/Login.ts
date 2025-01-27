import { NextFunction, Request, Response } from "express";
import { db } from "../../lib/prisma";
import { serverError } from "../../lib/utils";
import bcrypt from "bcrypt";

async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        if (req.body) {
            const { username, password } = req.body;
            if (!username || !password) {
                res.status(400).json({ message: "Invalid value" })
                return;
            } else {
                const admin = await db.admin.findUnique({
                    where: { username },
                });
                
                if (!admin) {
                    res.status(401).json({ message: "Username not valid" })
                    return;
                } else {
                    
                    const passwordMatch = await bcrypt.compare(password, admin.password);
                    if (passwordMatch) {
                        // @ts-ignore
                        req.id = admin.id
                        next()
                    } else {
                        res.status(401).json({ message: "Invalid admin password" })
                        return;
                    }
                }
            }
        } else {
            res.status(400).json({ message: "Invalid value" })
        }
    } catch (error) {
        serverError(error, res)
    }
}

export { login };