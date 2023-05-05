import { addUser, getUsers, editUser, removeUser } from '../api/user/controllers';
import { Router } from 'express';
import { encryptPassword } from '../middlewares/encrypt-password';
import { checkUserExists, checkUserNotExists } from '../middlewares/check-user-existence';

export = (router: Router) => {
    // Adds a new user to DB (users collection)
    router.post('/users/new', checkUserExists, encryptPassword, addUser);

    // Checks the DB (users collection), Finds angetUsersd return a specific user based on the user's id
    router.get('/users/:id', checkUserNotExists, getUsers);

    // Checks the DB (users collection), Finds and return all users
    router.get('/users', getUsers);

    // Checks the DB (users collection), Finds a specific user based on the user's id and updates the user fields
    router.put('/users/edit/:id', editUser);

    // Checks the DB (users collection), Finds a specific user based on the user's id and deletes the user from the DB
    router.delete('/users/remove/:id', removeUser);
};
