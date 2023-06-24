import { Request, Response, NextFunction } from 'express';
import ApiResponses from '../../../utilities/api-responses';
import { deleteEntity } from '../services/';

const removeEntity = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const entity: any = await deleteEntity(id);
        return ApiResponses.successResponseWithData(res, 'Successfully deleted entity.', entity);
    } catch (error) {
        return next(error);
    }
};

export { removeEntity };
