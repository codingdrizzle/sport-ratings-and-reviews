import { Request, Response, NextFunction } from 'express';
import { CustomError, User } from '../../../types';
import logger from '../../../core/logger';
import ApiResponse from '../../../utilities/api-responses';
import { createUser } from '../services';

const addUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: User = await createUser(req.body);
    return ApiResponse.successResponseWithData(
      res,
      'Account created successfully',
      user
    );
  } catch (error: any) {

      if (error.code === 11000) return res.status(409).json({message: 'User already exists'})
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

export { addUser };
