import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../types';
import logger from '../utils/logger';

export const ErrorHandler = (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    if (error.code) {
        logger.error(`code: ${error.code}, message: ${error.message}`)
        return res.status(error.code).json({ error });
    }
    logger.error(`code: ${500}, message: ${error.message}`)
    return res.status(500).json({ error })
}

//export const ErrorLogger = (error: CustomError, req: Request, res: Response, next: NextFunction) => {

//    return next(error)
//}

export const InvalidUrl = (req: Request, res: Response) => {
    const error: CustomError = {
        code: 404,
        message: "Url not found. Kindly check and try again",
    };
    return res.status(error.code).json({ error });
}