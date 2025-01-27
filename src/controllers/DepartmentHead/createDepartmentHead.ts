import { Request, Response } from "express";
import { db } from "../../lib/prisma";
import { serverError } from "../../lib/utils";
import fs from "fs";

async function createDepartmentHead(req: Request, res: Response): Promise<void> {
    try {
        const { name, employeeNumber, age, department, description } = req.body;
        const file = req.file;
        
        // @ts-ignore
        const departmentHead = await db.departmentHead.create({
            data: {
                name: name,
                description: description,
                employeeNumber,
                age: Number(age),
                departmentId: Number(department),
                image: `uploads/${file?.filename}`
            }
        })
        res.json({ message: "success", data: departmentHead });
        return;
    } catch(error:any) {
        fs.unlinkSync(`public/uploads/${req.file?.filename}`);
        serverError(error, res);
    }
}

export { createDepartmentHead };