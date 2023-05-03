import mongoose from "mongoose";
import { Review } from "../../../types";
import { ReviewModel } from "../schema";

const updateReview = (id: mongoose.Schema.Types.ObjectId, data: Review) => ReviewModel.findOneAndUpdate({_id: id}, {set: {...data}}, {new: true, runValidators: true, });

export { updateReview }