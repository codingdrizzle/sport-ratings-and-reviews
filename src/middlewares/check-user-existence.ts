import { Request, Response, NextFunction } from 'express';
import { findUser } from '../api/user/services';
import ApiResponse from '../utilities/api-responses';

export const checkUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await findUser(req.body.email);
    if (user)
      return ApiResponse.alreadyExistResponse(res, 'User already exists');
    else next();
  } catch (error) {
    return next(error);
  }
};

export const checkUserNotExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await findUser(req.body.email);
    if (!user) return ApiResponse.notFoundResponse(res, 'User not found');
    else next();
  } catch (error) {
    return next(error);
  }
};
