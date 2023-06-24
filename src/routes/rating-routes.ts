import { Router } from 'express';
import { getRatingsByUserId } from '../api/ratings/get-all-ratings-by-user.controller';
import { getavgEntityRatingController } from '../api/ratings/get-avg-entity-rating.controller';
import { generalAccess } from '../middlewares/access-permissions';


export = (router: Router) => {
    // Finds and calculates average rating value for all occurrences of a specific entity
    router.get('/ratings/:entityId', generalAccess, getavgEntityRatingController);
    
    // Finds and calculates the total number of ratings by a specific user
    router.get('/ratings/user/:userId', generalAccess, getRatingsByUserId);
};


