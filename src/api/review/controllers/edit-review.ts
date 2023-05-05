import { Request, Response, NextFunction } from 'express';
import { Review } from '../../../types';
import ApiResponses from '../../../utilities/api-responses';
import { updateReview } from '../services/';

const editReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const review: Review | any = await updateReview(id, req.body);
    return ApiResponses.successResponseWithData(res, 'Success', review);
  } catch (error) {
    return next(error);
  }
};

export { editReview };
