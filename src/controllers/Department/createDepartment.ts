import { Request, Response } from "express";
import { db } from "../../lib/prisma";
import { serverError } from "../../lib/utils";

async function createDepartment(req: Request, res: Response): Promise<void> {
    try {
        const { name, description } = req.body;
        const file = req.file;
        
        const department = await db.department.create({
            data: {
                name: name,
                description: description,
                image: `uploads/${file?.filename}`
            }
        })
        res.json({ message: "success", data: department });
        return;
    } catch(error:any) {
        serverError(error, res)
    }
}

export { createDepartment };