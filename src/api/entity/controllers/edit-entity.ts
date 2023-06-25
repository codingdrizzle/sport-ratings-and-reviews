import { Request, Response, NextFunction } from 'express';
import { CustomError, Entity } from '../../../types';
import logger from '../../../core/logger';
import ApiResponse from '../../../utilities/api-responses';
import { updateEntity } from '../services';

const editEntity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        if (Object.keys(req.body).length === 0) return ApiResponse.errorResponse(res, 'Request body is required', 'Nothing to update');
        const modifiedEntity: Entity | null = await updateEntity(id, req.body);
        return ApiResponse.successResponseWithData(
            res,
            'Entity modified successfully',
            { modifiedEntity }
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

export { editEntity };
