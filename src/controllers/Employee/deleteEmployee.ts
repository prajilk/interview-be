import { Request, Response } from "express";
import { serverError } from "../../lib/utils";
import { db } from "../../lib/prisma";

async function deleteEmployee(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        // @ts-ignore
        const employee = await db.employee.delete({
            where: {
                id: Number(id)
            }
        })
        res.json({ message: "success", data: employee });
    } catch(error: any) {
        serverError(error, res)
    }
}

export { deleteEmployee };