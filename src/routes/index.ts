import { Router } from 'express';
import UserRoutes from './user-routes'
import ReviewRoutes from './review-routes'
import EntityRoutes from './entity-routes'

const router = Router();

UserRoutes(router)
ReviewRoutes(router)
EntityRoutes(router)

module.exports = { router }