import { Request, Response, NextFunction } from 'express';
import { CustomError, Event } from '../../../types';
import logger from '../../../core/logger';
import ApiResponse from '../../../utilities/api-responses';
import { updateEvent } from '../services';
import { Types } from 'mongoose';

const editEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
      const modifiedEntity: Event | null = await updateEvent(new Types.ObjectId(id), req.body);
    return ApiResponse.successResponseWithData(
      res,
      'Event modified successfully',
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

export { editEvent };
