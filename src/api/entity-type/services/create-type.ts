import { EntityType } from '../../../types';
import { EntityTypeModel } from '../schema';

const createType = (type: EntityType): Promise<EntityType> => EntityTypeModel.create({entity_type: type});

export { createType };
