import { addReview, editReview, getReviewForEntity, getReviews, getReviewUnique } from '../api/review/controllers';
import { Router } from 'express';
import { deleteReview } from '../api/review/services';
import { generalAccess } from '../middlewares/access-permissions';
import { getavgRntityRatingController } from '../api/ratings/get-avg-entity-rating.controller';

export = (router: Router) => {
    // Adds a new review, created by a user to the DB (reviews collection)
    router.post('/review/:userId/:entityId', generalAccess, addReview);

    // Finds a specific review based on the review ID and entity ID
    router.get('/review/:reviewId/:entityId', generalAccess, getReviewForEntity);

    // Finds a specific review based on the review ID
    router.get('/review/:id', generalAccess, getReviewUnique);

    // Finds all reviews
    router.get('/reviews', generalAccess, getReviews);

    // Finds a specific review based on review ID and update the details of the review
    router.put('/review/:id', generalAccess, editReview);

    // Finds a specific review and delete or remove from the DB
    router.delete('/review/:id', generalAccess, deleteReview);
};
