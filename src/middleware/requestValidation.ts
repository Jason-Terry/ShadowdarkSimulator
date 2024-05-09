import { NextFunction, Request, Response } from "express";
import Joi, { ObjectSchema } from "joi";
import { Logger } from "../utils/logger";

export const validateRequest = (schema: ObjectSchema<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Logger.info(`Validating request: ${req.baseUrl}${req.path}`);
        let result = schema.validate(req.body);
        if (result.error) {
            Logger.error(`Validation failed: `);
            console.log(result.error.details)
            return res.status(400).json({ error: result.error.details });
        }
        next();
    };
};