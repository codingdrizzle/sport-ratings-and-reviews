import { Request, Response, NextFunction } from 'express';
import { CustomError, EntityType } from '../../../types';
import logger from '../../../core/logger';
import ApiResponse from '../../../utilities/api-responses';
import { findType, findTypes } from '../services';

const getType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (id) {
        const entity: EntityType | null = await findType(id);
      return await ApiResponse.successResponseWithData(res, 'Successful', entity);
    } else {
        const entities: EntityType[] | [] = await findTypes();
      return entities.length === 0
        ? await ApiResponse.successResponseWithData(
            res,
            'No entities',
            entities
          )
        : await ApiResponse.successResponseWithData(
            res,
            'Successful',
            entities
          );
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

export { getType };
