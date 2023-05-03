import { Request, Response, NextFunction } from 'express';
import ApiResponses from '../../../utilities/api-responses';
import { findReviews } from '../services';

const getReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reviews = await findReviews();
        return ApiResponses.successResponseWithData(res, 'Success', reviews)
    } catch (error) {
        next(error);
    }
}

export { getReviews }

