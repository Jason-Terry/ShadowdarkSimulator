import { Logger } from "../utils/logger";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    Logger.error(`Generic Error Caught:  ${err.message}`)
    return res.status(500).json({ message: err.message });
};