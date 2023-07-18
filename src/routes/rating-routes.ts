import { Router } from 'express';
import { getAverageRatingForReviewee } from '../api/ratings/get-avg-reviewee-rating.controller';
import { generalAccess } from '../middlewares/access-permissions';

export = (router: Router) => {
    // Finds and calculates average rating value for all occurrences of a specific entity
    router.get('/ratings/:eventId/:entitiyId/:revieweeId', generalAccess, getAverageRatingForReviewee);
};


