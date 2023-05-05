import { Router } from 'express';
import { login } from '../api/auth/login';
import { checkUserNotExists } from '../middlewares/check-user-existence';

export = (router: Router) => {
    router.post('/login', checkUserNotExists, login);
};
