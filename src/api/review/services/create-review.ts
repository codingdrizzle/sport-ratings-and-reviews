import { Review } from "../../../types";
import { ReviewModel } from "../schema";

const createReview = (data: Review): Promise<Review> => ReviewModel.create(data);

export { createReview }