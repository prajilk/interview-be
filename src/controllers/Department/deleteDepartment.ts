import { Request, Response } from "express";
import { db } from "../../lib/prisma";
import { serverError } from "../../lib/utils";
import fs from "fs";

async function deleteDepartment(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const department = await db.department.delete({
            where: {
                id: Number(id)
            }
        })

        fs.unlinkSync(`public/${department.image}`);

        res.json({ message: "success", data: department });
        return;
    } catch(error:any) {
        serverError(error, res)
    }
}

export { deleteDepartment };