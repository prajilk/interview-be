import { Request, Response } from "express"
import { serverError } from "../../lib/utils"
import { db } from "../../lib/prisma";

async function getEmployee(_: Request, res: Response): Promise<void> {
    try {
        // @ts-ignore
        const employee = await db.employee.findMany();
        res.json({ message: "success", data: employee });
    } catch(error: any) {
        serverError(error, res)
    }
}

export { getEmployee }