import { Request, Response } from 'express';
import { CustomError } from '../types';
import logger from '../core/logger';

export const ErrorHandler = (error: any, _req: Request, res: Response) => {
    if (error.code) {
        logger.error(`code: ${error.code}, message: ${error.message}`);
        return res.status(error.code).json(error);
    }
    logger.error(`code: ${500}, message: ${error.message}`);
    return res.status(500).json({ error: error });

};

export const InvalidUrl = (req: Request, res: Response) => {
    const error: CustomError = {
        code: 404,
        message: 'Url not found. Kindly check and try again',
    };
    return res.status(error.code).json({ error });
};
