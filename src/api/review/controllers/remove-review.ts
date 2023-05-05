import { Request, Response, NextFunction } from 'express';
import { Review } from '../../../types';
import ApiResponses from '../../../utilities/api-responses';
import { deleteReview } from '../services/';

const removeReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const review: Review | null = await deleteReview(id);
    return ApiResponses.successResponseWithData(
      res,
      'Successfully deleted review.',
      review
    );
  } catch (error) {
    return next(error);
  }
};

export { removeReview };
