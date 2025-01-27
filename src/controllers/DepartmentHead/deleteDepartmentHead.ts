import { Request, Response } from "express";
import { serverError } from "../../lib/utils";
import { db } from "../../lib/prisma";

async function deleteDepartmentHead(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        // @ts-ignore
        const departmentHead = await db.departmentHead.delete({
            where: {
                id: Number(id)
            }
        })
        res.json({ message: "success", data: departmentHead });
    } catch(error: any) {
        serverError(error, res)
    }
}

export { deleteDepartmentHead };