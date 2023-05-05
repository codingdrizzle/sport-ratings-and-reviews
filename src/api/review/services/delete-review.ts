import { ReviewModel } from '../schema';

const deleteReview = (id: string) => ReviewModel.findOneAndDelete({ _id: id });

export { deleteReview };
