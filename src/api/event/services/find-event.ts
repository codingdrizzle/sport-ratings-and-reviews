import { Types } from 'mongoose';
import { Event } from '../../../types';
import { EventModel } from '../schema';

const findEvent = (id: Types.ObjectId): Promise<Event | null> =>
    EventModel.findById(id);
const findEvents = (): Promise<Event[] | []> =>
    EventModel.find();

export { findEvent, findEvents };
