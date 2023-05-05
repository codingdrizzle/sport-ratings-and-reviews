import { ReviewModel } from '../schema';

const findReviewsForEntity = (reviewId: string, entityId: string) =>
  ReviewModel.find({ _id: reviewId, entityId })
    .populate({ path: 'reviewer', select: '-password -createdAt -updatedAt' })
    .populate({ path: 'entityId', select: '-createdAt -updatedAt' });

export { findReviewsForEntity };
