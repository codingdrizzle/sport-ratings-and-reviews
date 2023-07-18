import { addReview, editReview, getReviewForEvent, getReviewsForEventByEntity, getReviewsForEventByEntityReviewee,removeReview, getReviews, getReviewUnique } from '../api/review/controllers';
import { Router } from 'express';
import { generalAccess } from '../middlewares/access-permissions';

export = (router: Router) => {
    // Adds a new review, created by a user to the DB (reviews collection)
    router.post('/review/:reviewerId', generalAccess, addReview);

    // Finds all reviews
    router.get('/reviews', generalAccess, getReviews);
    
    // Finds a specific review based on the review ID
    router.get('/review/:id', generalAccess, getReviewUnique);
    
    // Finds a reviews for a particular Event
    router.get('/review/:eventId',   generalAccess, getReviewForEvent);
    
    // Finds a specific review for a particular Event based on entity 
    router.get('/reviews/:eventId/:entityId', generalAccess, getReviewsForEventByEntity);
    
    // Finds a specific review for a particular Event based on entity for a Reviewwee
    router.get('/reviews/:eventId/:entityId/:revieweeId', generalAccess, getReviewsForEventByEntityReviewee);

    // Finds a specific review based on review ID and update the details of the review
    router.put('/review/:id', generalAccess, editReview);

    // Finds a specific review and delete or remove from the DB
    router.delete('/review/:id', generalAccess, removeReview);
};
