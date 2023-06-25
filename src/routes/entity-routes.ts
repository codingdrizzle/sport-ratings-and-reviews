import { addEntity, getEntities, editEntity, removeEntity } from '../api/entity/controllers';
import { Router } from 'express';
import { generalAccess } from '../middlewares/access-permissions';

export = (router: Router) => {
    router.post('/entity/new', generalAccess, addEntity);
    router.get('/entity/:id', generalAccess, getEntities);
    router.get('/entities', generalAccess, getEntities);
    router.put('/entity/:id', generalAccess, editEntity);
    router.delete('/entity/:id', generalAccess, removeEntity);
};
