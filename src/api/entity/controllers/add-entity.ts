import { Request, Response, NextFunction } from 'express';
import { CustomError, Entity } from '../../../types';
import logger from '../../../core/logger';
import ApiResponse from '../../../utilities/api-responses';
import { createEntity } from '../services';

const addEntity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const entity = <string>req.body.entity;
        const new_entity = <Entity>await createEntity({entity});
        return ApiResponse.successResponseWithData(
            res,
            'Entity created successfully',
            new_entity
        );
    } catch (error: any) {
        if(error.code === 11000) return ApiResponse.errorResponse(res,'Duplicate key', 'Entity already exists');
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
