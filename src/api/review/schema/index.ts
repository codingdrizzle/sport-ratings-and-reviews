import mongoose, { Schema } from 'mongoose';
import { Review } from '../../../types';

const ReviewSchema: Schema = new Schema(
    {
        eventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event'
        },
        entityId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Entity',
            required: true,
        },
        revieweeId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        reviewerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
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

// Virtual field for Users
ReviewSchema.virtual('user', {
    ref: 'User',
    localField: 'revieweeId',
    foreignField: '_id',
    justOne: true,
});

// Virtual field for Facilities
//ReviewSchema.virtual('facility', {
//    ref: 'Facility',
//    localField: 'revieweeId',
//    foreignField: '_id',
//    justOne: true,
//});

// Apply virtuals
ReviewSchema.set('toObject', { virtuals: true });
ReviewSchema.set('toJSON', { virtuals: true });

const ReviewModel = mongoose.model<Review>('Reviews', ReviewSchema);

export { ReviewModel };
