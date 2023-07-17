import mongoose, { Schema } from 'mongoose';
import { ReviewModel } from '../../review/schema';

const EventSchema: Schema = new Schema({
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
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    //facility: {
    //    type: mongoose.Schema.Types.ObjectId,
    //    ref: 'Facility',
    //    required: true,
    //}
},
    { timestamps: true }
);

EventSchema.pre(/^remove/, async function (next) {
    try {
        const filter = this.getFilter();
        await ReviewModel.deleteMany({ event: filter._id });
        next();
    } catch (error: any) {
        next(error);
    }
});

const EventModel = mongoose.model<Event>('Event', EventSchema);

export { EventModel };
