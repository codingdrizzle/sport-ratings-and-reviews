import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import logger from '../../core/logger';
import { CustomError } from '../../types';
import ApiResponse from '../../utilities/api-responses';
import { findAverageRatingForReviewee } from "./find-average-ratings-for-reviewee"

const getAverageRatingForReviewee = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const eventId = new Types.ObjectId(req.params?.eventId)
        const entitiyId = new Types.ObjectId(req.params?.entitiyId);
        const revieweeId = new Types.ObjectId(req.params?.revieweeId)

        const ratings = <number>await findAverageRatingForReviewee(eventId, entitiyId, revieweeId);
        return ApiResponse.successResponseWithData(res, 'Ratings', ratings);
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

export { getAverageRatingForReviewee }