import { Request, Response, NextFunction } from 'express';
import { CustomError, EntityType } from '../../../types';
import logger from '../../../core/logger';
import ApiResponse from '../../../utilities/api-responses';
import { updateType } from '../services';

const editType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
      const { entity_type } = req.body.entity_type
      const modifiedEntity: EntityType | null = await updateType(id, { ...entity_type });
    return ApiResponse.successResponseWithData(
      res,
      'Entity modified successfully',
      { ...modifiedEntity }
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

export { editType };
