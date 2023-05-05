import { addEntity } from '../api/entity/controllers';
import { Router } from 'express';

export = (router: Router) => {
  router.post('/add-entity', addEntity);
};
