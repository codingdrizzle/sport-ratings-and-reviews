import { Review } from '../../../types';
import { ReviewModel } from '../schema';

const updateReview = (id: string, data: Review) =>
  ReviewModel.findOneAndUpdate(
    { _id: id },
    { $set: { ...data } },
    { new: true, runValidators: true }
  );

export { updateReview };
