import { addEvent, editEvent, getEvents, removeEvent } from '../api/event/controllers';
import { Router } from 'express';
import { generalAccess } from '../middlewares/access-permissions';

export = (router: Router) => {
    router.post('/event/new', generalAccess, addEvent);
    router.get('/event/:id', generalAccess, getEvents);
    router.get('/events', generalAccess, getEvents);
    router.put('/event/:id', generalAccess, editEvent);
    router.delete('/event/:id', generalAccess, removeEvent);
};
