import { ReviewModel } from '../schema';

const findReviewsUnique = (reviewId: string) =>
  ReviewModel.find({ _id: reviewId })
    .populate({ path: 'reviewer', select: '-password -createdAt -updatedAt' })
    .populate({ path: 'entityId', select: '-createdAt -updatedAt' });

export { findReviewsUnique };
