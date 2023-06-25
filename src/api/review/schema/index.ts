import mongoose, { Schema } from 'mongoose';
import { Review } from '../../../types';

const ReviewSchema: Schema = new Schema(
  {
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    entity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Entity',
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
      max: 5,
      required: true,
    },
    comment: {
      type: String,
      default: '',
      required: true,
    }
  },
  { timestamps: true }
);

const ReviewModel = mongoose.model<Review>('Reviews', ReviewSchema);

export { ReviewModel };
