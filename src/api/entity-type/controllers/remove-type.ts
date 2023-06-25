import { Request, Response, NextFunction } from 'express';
import ApiResponses from '../../../utilities/api-responses';
import { deleteType } from '../services';

const removeType = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const entityType: any = await deleteType(id);
        return ApiResponses.successResponseWithData(res, 'Successfully deleted entity type', entityType);
    } catch (error) {
        return next(error);
    }
};

export { removeType };
