import { Request, Response } from "express"
import { serverError } from "../../lib/utils"
import { db } from "../../lib/prisma";

async function getDepartmentHead(req: Request, res: Response): Promise<void> {
    try {
        // @ts-ignore
        const departmentHead = await db.departmentHead.findMany();
        res.json({ message: "success", data: departmentHead });
    } catch(error: any) {
        serverError(error, res)
    }
}

export { getDepartmentHead }