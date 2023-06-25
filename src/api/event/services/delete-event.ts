import { Types } from 'mongoose';
import { Event } from '../../../types';
import { ReviewModel } from '../../review/schema';
import { EventModel } from '../schema';


const deleteEvent = (id: Types.ObjectId): Promise<Event | null> => {
    return EventModel.findByIdAndDelete(id);
}

export { deleteEvent };
