import { Request, Response } from "express";
import { db } from "../../lib/prisma";
import { serverError } from "../../lib/utils";

async function getDepartment(_: Request, res: Response): Promise<void> {
    try {
        const department = await db.department.findMany();
        res.json({ message: "success", data: department });
        return;
    } catch(error:any) {
        serverError(error, res)
    }
}

export { getDepartment };