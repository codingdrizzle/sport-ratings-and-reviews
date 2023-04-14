import express, { Request, Response } from 'express';

const router = express.Router();

import UserRoutes from './user-routes'

UserRoutes(router)

module.exports = {router}