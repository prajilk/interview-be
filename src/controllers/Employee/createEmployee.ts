import { Request, Response } from "express";
import { db } from "../../lib/prisma";
import { serverError } from "../../lib/utils";
import fs from "fs";

async function createEmployee(req: Request, res: Response): Promise<void> {
    try {
        const { name, employeeNumber, age, departmentId, description, reportTo } = req.body;
        const file = req.file;
        
        // @ts-ignore
        const employee = await db.employee.create({
            data: {
                name: name,
                description: description,
                employeeNumber,
                age: Number(age),
                departmentId: Number(departmentId),
                image: `uploads/${file?.filename}`,
                reportToId: Number(reportTo)
            }
        })
        res.json({ message: "success", data: employee });
        return;
    } catch(error:any) {
        fs.unlinkSync(`public/uploads/${req.file?.filename}`);
        serverError(error, res);
    }
}

export { createEmployee };