import { Request, Response, NextFunction } from 'express';
import ApiResponses from '../../../utilities/api-responses';
import { findReviewsUnique } from '../services';

const getReviewUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const reviews = await findReviewsUnique(id);
    return ApiResponses.successResponseWithData(res, 'Success', reviews);
  } catch (error) {
    return next(error);
  }
};

export { getReviewUnique };
