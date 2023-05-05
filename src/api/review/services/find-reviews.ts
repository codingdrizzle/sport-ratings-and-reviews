import { ReviewModel } from '../schema';

const findReviews = () =>
  ReviewModel.find()
    .populate({ path: 'reviewer', select: '-password -createdAt -updatedAt' })
    .populate({ path: 'entityId', select: '-createdAt -updatedAt' });

export { findReviews };
