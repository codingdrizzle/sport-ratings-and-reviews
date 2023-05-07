import { addEntity } from '../api/entity/controllers';
import { Router } from 'express';
import { generalAccess } from '../middlewares/access-permissions';

export = (router: Router) => {
    router.post('/add-entity', generalAccess, addEntity);
};
