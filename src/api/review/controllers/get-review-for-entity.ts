import { Request, Response, NextFunction } from 'express';
import ApiResponses from '../../../utilities/api-responses';
import { findReviewsForEntity } from '../services/';

const getReviewForEntity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { reviewId, entityId } = req.params;
    const entity_reviews = await findReviewsForEntity(reviewId, entityId);
    return ApiResponses.successResponseWithData(res, 'Success', entity_reviews);
  } catch (error) {
    return next(error);
  }
};

export { getReviewForEntity };
