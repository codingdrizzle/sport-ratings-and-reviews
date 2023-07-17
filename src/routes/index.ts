import { Router } from 'express';
import UserRoutes from './user-routes';
import ReviewRoutes from './review-routes';
import EntityRoutes from './entity-routes';
import EventRoutes from './event-routes';
import AuthenticationRoutes from './authentication-routes';
import RatingRoutes from './rating-routes';

const router = Router();

AuthenticationRoutes(router);
UserRoutes(router);
ReviewRoutes(router);
EntityRoutes(router);
EventRoutes(router);
RatingRoutes(router);

export { router };