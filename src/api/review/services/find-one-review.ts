import { ReviewModel } from '../schema';

const findReviewsUnique = (reviewId: string) =>
  ReviewModel.find({ _id: reviewId })
        .populate({ path: 'reviewer', select: '_id username email' })
        .populate({ path: 'event', select: '_id name' })
        .populate({
            path: 'entity',
            select: '_id entity entity_type',
            populate: [
                { path: 'entity_type', select: 'entity_type' },
                { path: 'user', select: '_id username email' }
            ]
        });

export { findReviewsUnique };
