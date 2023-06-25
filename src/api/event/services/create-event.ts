import { Event } from '../../../types';
import { EventModel } from '../schema';

const createEvent = (data: Event) => EventModel.create<Event>(data);

export { createEvent };
