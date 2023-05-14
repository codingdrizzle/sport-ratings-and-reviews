import { Request, Response, NextFunction } from 'express';
import logger from '../../core/logger';
import { CustomError } from '../../types';
import ApiResponse from '../../utilities/api-responses';
import { getEntityAverageRating } from './entity-avg-rating';


const getavgRntityRatingController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const entityId: string = req.params.entityId;
        const avgRatings: number = await getEntityAverageRating(entityId);
        return ApiResponse.successResponseWithData(res,'Average Rating', {average_rating: avgRatings});
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
};

export { getavgRntityRatingController };
