import { addReview, getReviewForEntity, getReviews } from '../api/review/controllers';
import { Router } from 'express';

export = (router: Router) => {
    router.post('/reviews/new/:userId/:entityId', addReview);
    router.get('/reviews/:reviewId/:entityId', getReviewForEntity);
    router.get('/reviews', getReviews);
}