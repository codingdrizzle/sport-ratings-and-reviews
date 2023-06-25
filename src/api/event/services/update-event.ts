import { Types } from 'mongoose';
import { Event } from '../../../types';
import { EventModel } from '../schema';

interface UpdateQuery {
    $set?: Partial<Event>;
    $addToSet?: {
        participants?: { $each: Types.ObjectId[] };
        reviews?: { $each: Types.ObjectId[] };
    };
}

const updateEvent = (id: Types.ObjectId, data: Event): Promise<Event | null> => {
    const updateQuery: UpdateQuery = {};

    if (data.participants) updateQuery.$addToSet = { participants: { $each: data.participants } }
    if (data.reviews) updateQuery.$addToSet = { reviews: { $each: data.reviews } };
    if (Object.keys(data).length > 0) updateQuery.$set = { ...data };

    return EventModel.findByIdAndUpdate(id, updateQuery, { runValidators: true, upsert: true });

}
export { updateEvent };
