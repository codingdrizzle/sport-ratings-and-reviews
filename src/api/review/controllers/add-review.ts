import { NextFunction, Request, Response } from 'express';
import mongoose, { Types } from 'mongoose';
import { CustomError, User, Review } from '../../../types';
import ApiResponse from '../../../utilities/api-responses';
import { createReview } from '../services';
import { UserModel } from '../../user/schema';
import { EntityModel } from '../../entity/schema';

interface ValidationErrors {
    [field: string]: string;
}

const getReviewableEntity = async (entityId: Types.ObjectId, reviewerId: Types.ObjectId, revieweeId: Types.ObjectId): Promise<Types.ObjectId | null> => {
    const entityMatch: any = await EntityModel.findById(entityId);

    let reviewees: User[];
    let reviewee: User | undefined;

    switch (entityMatch?.entity) {
        case 'participant':
            reviewees = await UserModel.find({ _id: { $ne: reviewerId } });
            reviewee = reviewees.find((reviewee: User) => reviewee._id?.toString() === revieweeId.toString());
            break;
        default:
            reviewee = undefined;
            break;
    }

    return reviewee?._id || null;
}

const addReview = async (req: Request, res: Response, next: NextFunction) => {
    const reviewerId = new mongoose.Types.ObjectId(req.params?.reviewerId);
    const { eventId, entityId, revieweeId, rating, comment } = <Review>req.body
    try {
        const reviewee = await getReviewableEntity(entityId, reviewerId, revieweeId)

        if(reviewee === null) return ApiResponse.errorResponse(res, 'Invalid Request', 'reviewee not found')
        
        const review = await createReview({ eventId, entityId, revieweeId: reviewee, reviewerId, rating, comment } as Review);
        return ApiResponse.successResponseWithData(
            res,
            'Successfully added review',
            review
        );
    } catch (error: any) {
        if (error instanceof mongoose.Error.ValidationError) {
            // Extract validation errors
            const errors: ValidationErrors = Object.keys(error.errors).reduce(
                (acc, key) => {
                    acc[key] = error.errors[key].message;
                    return acc;
                },
                {} as ValidationErrors
            );
            return res.status(422).json({ errors });
        }
        const customError: CustomError = {
            code: 500,
            message: 'An unknown error occurred',
        };
        return next(customError);
    }
};

export { addReview };
