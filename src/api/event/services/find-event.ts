import { Types } from 'mongoose';
import { Event } from '../../../types';
import { EventModel } from '../schema';

const findEvent = (id: Types.ObjectId): Promise<Event | null> =>
    EventModel.findById(id)
        .populate({ path: 'participants', select: 'username _id' });

const findEvents = (): Promise<Event[] | []> =>
    EventModel.find()
        .populate({ path: 'participants', select: 'username _id' });

export { findEvent, findEvents };
