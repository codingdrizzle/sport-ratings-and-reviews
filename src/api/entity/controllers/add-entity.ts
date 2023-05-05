import { Request, Response, NextFunction } from 'express';
import { CustomError, Entity } from '../../../types';
import logger from '../../../core/logger';
import ApiResponse from '../../../utilities/api-responses';
import { createEntity } from '../services';

const addEntity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const entity: Entity = await createEntity(req.body);
    return ApiResponse.successResponseWithData(
      res,
      'Entity created successfully',
      entity
    );
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

export { addEntity };
