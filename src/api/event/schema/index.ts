import mongoose, { Schema } from 'mongoose';

const EventSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        sport: {
            type: String,
            required: true,
        },
        event_date: {
            type: Date,
            required: true
        },
        event_venue: {
            type: String,
            required: true
        },
        participants: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        reviews: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
            required: true,
        }]
    },
    { timestamps: true }
);

//// Virtual field for Entities
//ReviewSchema.virtual('entities', {
//    ref: 'Entities',
//    localField: 'entityId',
//    foreignField: '_id',
//    justOne: true,
//});

//// Virtual field for Users
//ReviewSchema.virtual('users', {
//    ref: 'Users',
//    localField: 'entityId',
//    foreignField: '_id',
//    justOne: true,
//});

//// Virtual field for Facilities
//ReviewSchema.virtual('facilities', {
//    ref: 'Facilities',
//    localField: 'entityId',
//    foreignField: '_id',
//    justOne: true,
//});

//// Apply virtuals
//ReviewSchema.set('toObject', { virtuals: true });
//ReviewSchema.set('toJSON', { virtuals: true });

// Create the Review model using the schema
const ReviewModel = mongoose.model<Event>('Reviews', EventSchema);

export { ReviewModel };
