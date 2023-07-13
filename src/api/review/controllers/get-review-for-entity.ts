import { Request, Response, NextFunction } from 'express';
import ApiResponses from '../../../utilities/api-responses';
import { findReviewsForEntity } from '../services/';

const getReviewForEntity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { review_id, entity_id } = req.params;
    const entity_reviews = await findReviewsForEntity(review_id, entity_id);
    return ApiResponses.successResponseWithData(res, 'Success', entity_reviews);
  } catch (error) {
    return next(error);
  }
};

export { getReviewForEntity };