import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import logger from '../../core/logger';
import { CustomError } from '../../types';
import ApiResponse from '../../utilities/api-responses';
import { findUserRatings } from "../review/services/find-all-ratings-by-user"

const getRatingsByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId: string = req.params.userId;
        const ratings: any[] = await findUserRatings(new mongoose.Types.ObjectId(userId));
        return ApiResponse.successResponseWithData(res, 'User Ratings', ratings);
    } catch (error) {
        if (error instanceof Error) {
            logger.error(error.message);
            next(error);
        } else {
            const customError: CustomError = {
                code: 500,
                message: 'An unknown error occurred',
            };
            next(customError);
        }
    }
}

export { getRatingsByUserId }