import { Request, Response } from "express";
import { serverError } from "../../lib/utils";
import { db } from "../../lib/prisma";

async function updateDepartment(req: Request, res: Response): Promise<void> {
    try {
        const { name, description } = req.body;
        const { id } = req.params;
        const file = req.file;
        
        const department = await db.department.update({
            where: {
                id: Number(id)
            },
            data: {
                name: name,
                description: description,
                // @ts-ignore
                image: `uploads/${file.filename}`
            }
        })
        res.json({ message: "success", data: department });
        return;
    } catch(error: any) {
        serverError(error, res)
    }
}

export { updateDepartment }