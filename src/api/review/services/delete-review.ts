import mongoose from "mongoose";
import { ReviewModel } from "../schema";

const deleteReview = (id: mongoose.Schema.Types.ObjectId) => ReviewModel.findOneAndDelete({_id: id});

export { deleteReview }