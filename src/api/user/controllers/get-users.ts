import { Request, Response, NextFunction } from 'express';
import { CustomError, User } from '../../../types';
import logger from '../../../core/logger';
import ApiResponse from '../../../utilities/api-responses';
import { findUser, findUsers } from '../services';

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (id) {
      const user: User | null = await findUser({ _id: id });
      return await ApiResponse.successResponseWithData(res, 'Successful', user);
    } else {
      const users: User[] | [] = await findUsers();
      return users.length === 0
        ? await ApiResponse.successResponseWithData(res, 'No users', users)
        : await ApiResponse.successResponseWithData(res, 'Successful', users);
    }
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
      next(error);
    } else {
      const customError: CustomError = {
        code: 500,
        message: 'An unknown error occurred',
      };
      next(customError);
    }
  }
};

export { getUsers };
