import { Request, Response, NextFunction } from 'express';
import { CustomError, Event } from '../../../types';
import logger from '../../../core/logger';
import ApiResponse from '../../../utilities/api-responses';
import { createEvent } from '../services';

const addEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const event = await createEvent(<Event>req.body);
    return ApiResponse.successResponseWithData(
      res,
      'Event created successfully',
      event
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

export { addEvent };
