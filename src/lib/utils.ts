import { Response } from "express";

function serverError(error: any, res: Response) {
    console.log(error);
    if (error.message.endsWith("timed out after 10000ms"))
        return res.status(503).json({ message: "No internet connection!" })
    res.status(500).json({ message: "Something went wrong. Server Error!" })
}

export { serverError };