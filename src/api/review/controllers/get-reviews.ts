import { Request, Response, NextFunction } from 'express';
import ApiResponses from '../../../utilities/api-responses';
import { findReviews, findReviewsUnique, findReviewsForEvent, findReviewsForEventByEntity, findReviewsForEventByEntityReviewee } from '../services';
import { Types } from 'mongoose';
import { Review } from '../../../types';

const ObjectId = Types.ObjectId

const getReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reviews: Review[] = await findReviews();
        return ApiResponses.successResponseWithData(res, 'Success', reviews);
    } catch (error) {
        return next(error);
    }
};

const getReviewUnique = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const review: Review | null = await findReviewsUnique(new ObjectId(id));
        return ApiResponses.successResponseWithData(res, 'Success', review);
    } catch (error) {
        return next(error);
    }
};

const getReviewForEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { eventId } = req.params;
        const event_reviews = await findReviewsForEvent(new ObjectId(eventId));
        console.log(event_reviews);
        return ApiResponses.successResponseWithData(res, 'Success', event_reviews);
    } catch (error) {
        return next(error);
    }
};

const getReviewsForEventByEntity = async (req: Request, res: Response, next: NextFunction) => {
    const eventId = new ObjectId(req.params.eventId);
    const entityId = new ObjectId(req.params.entityId);

    try {
        const reviews = await findReviewsForEventByEntity(eventId, entityId);
        return ApiResponses.successResponseWithData(res, 'Success', reviews);
    } catch (error) {
        return next(error);
    }
};

const getReviewsForEventByEntityReviewee = async (req: Request, res: Response, next: NextFunction) => {
    const eventId = new ObjectId(req.params.eventId);
    const entityId = new ObjectId(req.params.entityId);
    const revieweeId = new ObjectId(req.params.revieweeId);
    try {
        const reviews = await findReviewsForEventByEntityReviewee(eventId, entityId, revieweeId);
        return ApiResponses.successResponseWithData(res, 'Success', reviews);
    } catch (error) {
        return next(error);
    }
};

export { getReviews, getReviewUnique, getReviewForEvent, getReviewsForEventByEntity, getReviewsForEventByEntityReviewee };
