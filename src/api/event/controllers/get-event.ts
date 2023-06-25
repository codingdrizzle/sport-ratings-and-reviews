import { Request, Response, NextFunction } from 'express';
import { CustomError, Event } from '../../../types';
import logger from '../../../core/logger';
import ApiResponse from '../../../utilities/api-responses';
import { findEvent, findEvents } from '../services';
import { Types } from 'mongoose';

const getEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (id) {
            const event: Event | null = await findEvent(new Types.ObjectId(id));
            return await ApiResponse.successResponseWithData(res, 'Successful', event);
        } else {
            const events: Event[] = await findEvents();
            return events.length === 0
                ? await ApiResponse.successResponseWithData(
                    res,
                    'No Events',
                    events
                )
                : await ApiResponse.successResponseWithData(
                    res,
                    'Successful',
                    events
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

export { getEvents };
