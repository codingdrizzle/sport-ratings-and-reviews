import {
  addReview,
  editReview,
  getReviewForEntity,
  getReviews,
  getReviewUnique,
} from '../api/review/controllers';
import { Router } from 'express';
import { deleteReview } from '../api/review/services';

export = (router: Router) => {
  router.post('/review/:userId/:entityId', addReview);

  router.get('/review/:reviewId/:entityId', getReviewForEntity);
  router.get('/review/:id', getReviewUnique);
  router.get('/reviews', getReviews);

  router.put('/review/:id', editReview);

  router.delete('/review/:id', deleteReview);
};
