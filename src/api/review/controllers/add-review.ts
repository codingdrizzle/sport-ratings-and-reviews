import { NextFunction, Request, Response } from 'express'
import mongoose, { MongooseError } from 'mongoose'
import logger from '../../../core/logger'
import { CustomError } from '../../../types'
import ApiResponse from '../../../utilities/api-responses'
import { createReview } from '../services'

interface ValidationErrors {
    [field: string]: string;
}

const addReview = async (req: Request, res: Response, next: NextFunction) => {
    const { userId, entityId } = req.params

    try {
        const review = await createReview({ reviewer: userId, entityId, ...req.body })
        console.log(review)
        return ApiResponse.successResponseWithData(res, 'Successfully added review', review)
    } catch (error: any) {
        if (error instanceof mongoose.Error.ValidationError) {
            // Extract validation errors
            const errors: ValidationErrors = Object.keys(error.errors).reduce((acc, key) => {
                acc[key] = error.errors[key].message;
                return acc;
            }, {} as ValidationErrors);
            res.status(422).json({ errors });
        }
        const customError: CustomError = { code: 500, message: 'An unknown error occurred', };
        next(customError);
    }
}

export { addReview }