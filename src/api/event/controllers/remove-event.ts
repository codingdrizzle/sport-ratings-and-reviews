import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import { Event } from '../../../types';
import ApiResponses from '../../../utilities/api-responses';
import { deleteEvent } from '../services';

const removeEvent = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const event = <Event>await deleteEvent(new Types.ObjectId(id));
        return ApiResponses.successResponseWithData(res, 'Successfully deleted event.', event);
    } catch (error) {
        return next(error);
    }
};

export { removeEvent };
