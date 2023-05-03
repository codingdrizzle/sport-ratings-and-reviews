import mongoose from "mongoose";
import { ReviewModel } from "../schema";

//mongoose.Schema.Types.ObjectId

const findReviewsForEntity = (reviewId: string, entityId: string) => ReviewModel.find({ _id: reviewId, entityId })
.populate({ path: 'reviewer', select: '-password -createdAt -updatedAt' })
.populate({ path: 'entityId', select: '-createdAt -updatedAt' });

export { findReviewsForEntity };