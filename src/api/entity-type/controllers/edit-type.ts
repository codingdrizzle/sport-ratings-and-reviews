import { Request, Response, NextFunction } from 'express';
import { CustomError, EntityType } from '../../../types';
import logger from '../../../core/logger';
import ApiResponse from '../../../utilities/api-responses';
import { updateType } from '../services';

const editType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
      const entity_type = req.body.entity_type

      const modifiedEntity: EntityType | null = await updateType(id, entity_type);
    return ApiResponse.successResponseWithData(
      res,
      'Entity Type modified successfully',
      { modifiedEntity }
    );
  } catch (error: any) {
      logger.error(error.message);
      return res.status(500).json({ error: error.message });
  }
};

export { editType };
