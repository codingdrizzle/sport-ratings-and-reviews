import { addType, editType, getType, removeType } from '../api/entity-type/controllers';
import { Router } from 'express';
import { generalAccess } from '../middlewares/access-permissions';

export = (router: Router) => {
    router.post('/entity-type/new', generalAccess, addType);
    router.get('/entity-type/:id', generalAccess, getType);
    router.get('/entity-types', generalAccess, getType);
    router.put('/entity-type/:id', generalAccess, editType);
    router.delete('/entity-type/:id', generalAccess, removeType);
};
