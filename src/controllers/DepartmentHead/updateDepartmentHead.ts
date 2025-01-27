import { Request, Response } from "express";
import { serverError } from "../../lib/utils";
import { db } from "../../lib/prisma";
import fs from "fs";

async function updateDepartmentHead(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const { name, employeeNumber, age, departmentId, description } = req.body;
        const file = req.file;

        if(Object.keys(req.body).length === 0) {
            res.status(400).json({ message: "Please provide all the fields" });
            return;
        }
        

        // @ts-ignore
        const departmentHead = await db.departmentHead.update({
            where: {
                id: Number(id)
            },
            data: {
                name: name,
                description: description,
                employeeNumber,
                age: Number(age),
                departmentId: Number(departmentId),
                image: `uploads/${file?.filename}`
            }
        })
        res.json({ message: "success", data: departmentHead });

    } catch(error: any) {
        fs.unlinkSync(`public/uploads/${req.file?.filename}`);
        serverError(error, res)
    }
}

export { updateDepartmentHead };