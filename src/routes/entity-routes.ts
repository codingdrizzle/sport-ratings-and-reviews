import { addEntity,getEntities, editEntity } from '../api/entity/controllers';
import { Router } from 'express';
import { generalAccess } from '../middlewares/access-permissions';

export = (router: Router) => {
    router.post('/entity/new', generalAccess, addEntity);
    router.get('/entity/:id', generalAccess, getEntities);
    router.get('/entities', generalAccess, getEntities);
    router.put('/entity/:id', generalAccess, editEntity);
};
