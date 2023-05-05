import { Router } from 'express';
import UserRoutes from './user-routes';
import ReviewRoutes from './review-routes';
import EntityRoutes from './entity-routes';
import AuthenticationRoutes from './authentication-routes';

const router = Router();

AuthenticationRoutes(router);
UserRoutes(router);
ReviewRoutes(router);
EntityRoutes(router);

export { router };
