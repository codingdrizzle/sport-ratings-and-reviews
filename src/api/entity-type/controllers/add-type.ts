import { Request, Response, NextFunction } from 'express';
import { CustomError, EntityType } from '../../../types';
import logger from '../../../core/logger';
import ApiResponse from '../../../utilities/api-responses';
import { createType } from '../services';

const addType = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const entity_type = req?.body?.entity_type
        const entity: EntityType = await createType(entity_type);
        return ApiResponse.successResponseWithData(
            res,
            'Entity Type created successfully',
            entity
        );
    } catch (error: any) {
        logger.error(error);
        return res.status(500).json({ message: error.message });
    }
};

export { addType };
