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
        const entity: any = await deleteType(id);
        return ApiResponses.successResponseWithData(res, 'Successfully deleted entity.', entity);
    } catch (error) {
        return next(error);
    }
};

export { removeType };
