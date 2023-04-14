import {createNewUser} from '../app/user/controllers/new-user'
import { Router } from 'express'
import { encryptPassword } from '../middlewares/encrypt-password'
import { checkUserExists } from '../middlewares/check-user-existence'

export = (router: Router) => {
    router.post('/new-user', checkUserExists, encryptPassword, createNewUser) 
}